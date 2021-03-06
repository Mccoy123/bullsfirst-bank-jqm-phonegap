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
 * app/pages/accounts/AccountsPage
 *
 * @author Naresh Bhatia
 */
define(
    [
        'app/framework/BaseView',
        'app/pages/accounts/AccountView'
    ],
    function(BaseView, AccountView) {
        'use strict';

        return BaseView.extend({
            initialize: function() {
                this.collection.bind('sync', this.render, this);
            },

            render: function() {
                this.destroyChildren();

                var $list = this.$el.find('.jsAccountList');

                this.collection.each(function(model) {
                    var accountView = new AccountView({model: model});
                    this.addChild(model.id, accountView);
                    $list.append(accountView.render().$el);
                }, this);

                $list.listview('refresh');

                return this;
            }
        });
    }
);