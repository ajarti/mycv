// N.B window.log() calls only for development as easy logging, vs devtools, and can be disabled in bootstrap or parsed out with webpack.

module.exports = {
    computed : {},
    data()
    {
        return {
            serverReturned : true
        }
    },
    methods  : {
        fetch(configIn)
        {
            var self   = this;
            var config = configIn || null;
            if ( _.isNull(config) ) return;

            window.log('helper-mixins.fetch: Calling server with data:', config);

            // Setup method
            let method = (_.has(config, 'method') && !_.isEmpty(config.method)) ? config.method : 'post';

            // Stop multi submissions.
            if ( _.has(config, 'flag') && self[config.flag] ) {
                return; // in-progress
            } else {
                self[config.flag] = true;
            }

            // Default success callback.
            let onSuccess = config.success || function(response){
            };

            // Default error callback.
            let onError = config.error || function(response){
            };

            // Call Server ...
            self.serverReturned = false;
            window.axios[method](config.url, config.data)
                .then(function(success){
                    window.log('helper-mixins.fetch: Success Response:', success);
                    if ( _.has(success, 'data') ) {
                        self.processMessages(success.data);
                    }
                    onSuccess(success);
                })
                .catch(function(error){
                    window.log('helper-mixins.fetch: Error Response:', error);
                    if ( _.has(error, 'response.data') ) {
                        self.processMessages(error.response.data);
                    }
                    onError(error);
                })
                .then(function(){
                    window.log('helper-mixins.fetch: Always');
                    self[config.flag]   = false;
                    self.serverReturned = true;
                });

        },
        formatAsYearsMonths(startDate, endDate)
        {
            var a     = moment.unix(endDate);
            var b     = moment.unix(startDate);
            var years = a.diff(b, 'year');
            b.add(years, 'years');
            var months = a.diff(b, 'months');
            var str    = ((years > 0) ? years + ((years > 1) ? ' Years' : ' Year') : '')
            str += ((months > 0) ? ((years > 0) ? ' ' : '') + months + ((months > 1) ? ' Months' : ' Month') : '')
            return str;
        },
        formatDate(utsDate, short)
        {
            var short = short || false;
            var self  = this;
            if ( !self.isTimestamp(utsDate) ) return '';
            return (short) ? moment.unix(utsDate).format('MMM \'YY') : moment.unix(utsDate).format('MMM YYYY');
        },
        getBooleanValue(ref)
        {
            var self = this;
            var ref  = ref || null;

            if ( _.isNull(ref) || !_.isString(ref) ) {
                window.log('getBooleanValue: bad string reference.');
                return '';
            }

            if ( !_.has(self, ref) ) {
                window.log('getBooleanValue: self.' + ref + ' does not exist.');
                return '';
            }

            return (_.get(self, ref) == 'yes') ? 1 : 0;
        },
        getNumericValue(ref)
        {
            var self = this;
            var ref  = ref || null;
            if ( _.isNull(ref) || !_.isString(ref) ) {
                window.log('getNumericValue: bad string reference.');
                return '';
            }
            if ( !_.has(self, ref) ) {
                window.log('getNumericValue: self.' + ref + ' does not exist.');
                return '';
            }
            return _.toNumber(_.get(self, ref));
        },
        getStringValue(ref)
        {
            var self = this;
            var ref  = ref || null;
            if ( _.isNull(ref) || !_.isString(ref) ) {
                window.log('getStringValue: bad string reference.');
                return '';
            }
            if ( !_.has(self, ref) ) {
                window.log('getStringValue: self.' + ref + ' does not exist.');
                return '';
            }
            return _.get(self, ref);
        },
        isTimestamp(timestamp)
        {
            var timestamp = timestamp || null;
            return (!_.isNull(timestamp) && !isNaN(timestamp) && moment.unix(timestamp).isValid());
        },
        isYes(value)
        {
            var self  = this;
            var value = value || false;
            return (_.isEqual(_.toLower(value), 'yes'));
        },
        notify(message, detail, messageType)
        {
            var self        = this;
            var message     = message || '';
            var detail      = detail || '';
            var messageType = messageType || 'info';
            if ( _.isEmpty(message) ) return false;
            self.$q.notify({
                message  : message,
                timeout  : 5000,
                type     : messageType,
                detail   : detail,
                position : 'top',

            })
        },
        processMessages(responseIn)
        {
            let self = this;

            // Default and check for data.
            let response = responseIn || null;
            if ( _.isNull(response) ) return;

            window.log('helper-mixins.processMessages: Running with:', response);

            // Check for general messages.
            if ( _.has(response, 'messages') ) {
                _.each(response.messages, function(messages, key){
                    let message = _.isArray(messages) ? messages.join(', ') : messages;

                    switch ( key ) {
                        case 'alert-error':
                            self.notify(message, '', 'warning');
                            break;

                        case 'alert-info':
                            self.notify(message, '', 'info');
                            break;

                        case 'alert-success':
                            self.notify(message, '', 'positive');
                            break;
                    }
                });
            }

        },
        setValue(obj, fields, value)
        {
            var self   = this;
            var fields = fields || null;
            var obj    = obj || self;
            var value  = value || '';

            if ( !_.isObject(obj) ) {
                window.log('Cannot set fields to bad object.');
                return;
            }

            if ( _.isNull(value) || _.isNull(fields) ) {
                window.log('Cannot set fields with bad params.');
                return;
            }

            // Check for fields that is an index (collection update)
            if ( _.isNumber(fields) ) {
                var index = fields; // Just for readability.
                Vue.set(obj, index, value);
                return self;
            }

            // Check for multi-set.
            fields = (_.isArray(fields)) ? fields : [fields];
            _.each(fields, function(field){
                if ( _.isString(field) ) {
                    Vue.set(obj, field, value);
                }
            });
            return self;
        },
        toggle(ref)
        {
            var self = this;
            var ref  = ref || null;
            if ( _.isNull(ref) ) return;
            if ( _.has(self, ref) ) {
                _.set(self, ref, !_.get(self, ref));
            }
        },
        updateList : function(collection, item, compareKey){
            var self  = this;
            var key   = compareKey || 'id';
            var found = false;
            window.log('helper-mixins:updateList called with ', collection, item, compareKey);
            _.forEach(collection, function(collectionItem, index){
                if ( _.isEqual(_.toString(collectionItem[key]), _.toString(item[key])) ) {
                    self.setValue(collection, index, item);
                    found = true;
                }
            });

            // Add to collection if not found for update.
            if ( !found ) {
                collection.unshift(item);
            }

        },
    }
}