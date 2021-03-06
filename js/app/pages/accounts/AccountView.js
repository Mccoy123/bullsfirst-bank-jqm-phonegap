/**
 * Copyright 2013 Archfirst
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * app/pages/accounts/AccountView
 *
 * @author Naresh Bhatia
 */
define(
    [
        'app/domain/Repository',
        'app/framework/BaseView',
        'handlebars',
        'text!app/pages/accounts/AccountTemplate.html'
    ],
    function(Repository, BaseView, Handlebars, AccountTemplate) {
        'use strict';

        var _template = Handlebars.compile(AccountTemplate);

        return BaseView.extend({
            tagName: 'li',

            events: {
                'click': 'handleClick'
            },

            render: function() {
                var account = this.model.toJSON();
                this.$el.html(_template(account));
                return this;
            },

            handleClick: function() {
                Repository.fetchTransactions(this.model.id);
                $.mobile.changePage('#transactions-page');
            }
        });
    }
);