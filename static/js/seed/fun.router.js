/*
* Routes are resource address capability service nouns.
*/
fun.Router = Backbone.Router.extend({

    /*
     Seed server routes
    */
    routes: {
        "": "home",
        "home": "home",
        "landing": "landing",
        "calendars": "calendars",
        "monitors": "monitors",
        "dashboard": "dashboard",
        "dashboard/a:account": "dashboard",
        "dashboard/a:account/o:org": "dashboard",
        "signup": "signup",
        "login": "login",
        "terms": "terms",
        "security": "security",
        "privacy": "privacy",
        "status": "status",
        "help": "help",
        "contact": "contact",
        "contacts": "contacts",
        "contacts/p:page": "contacts",
        "tasks": "tasks",
        "tasks/p:page": "tasks",
        "orgs": "orgs",
        "activity": "activity",
        "profile": "profile",
        "members": "members",
        "teams": "teams",
        "reports": "reports",
        "reports/p:page": "reports",
        "accounts":"accounts",
        "messages": "messages",
        "about": "about",
        "binary": "binary",
        "education": "education",
        "resources": "resources",
        "assets":"assets",
        "currencies":"currencies",
        "stocks":"stocks",
        "deposit": "deposit",
        "withdraw": "withdraw",
        "redeem":"redeem",
        "trades":"trades",
        "purchase":"purchase",
        "risk":"risk",
        "trader":"trader",
        "beginner":"beginner",
        "intermediate":"intermediate",
        "expert":"expert",
        "elite":"elite",
        "categorizer":"categorizer",
        "settings": "settings",
        "logout": "logout"
    },

    initialize: function(){
        'use strict';
        // navigation bar
        fun.instances.navbar = new fun.views.navbar({
            el:"#fun-navbar"
        });
        // sub header
        fun.instances.subheader = new fun.views.subheader({
            el:"#fun-subheader"
        });
        // landing
        fun.instances.landing = new fun.views.landing({
            el:"#fun-landing"
        });
        // terms
        fun.instances.terms = new fun.views.terms({
            el:"#fun-terms"
        });
        // privacy
        fun.instances.privacy = new fun.views.privacy({
            el:"#fun-privacy"
        });
        // security
        fun.instances.security = new fun.views.security({
            el:"#fun-security"
        });
        // status
        fun.instances.status = new fun.views.status({
            el:"#fun-status"
        });
        // help
        fun.instances.help = new fun.views.help({
            el:"#fun-help"
        });
        // login
        fun.instances.login = new fun.views.login({
            el:"#fun-login"
        });
        // dashboard
        fun.instances.dashboard = new fun.views.dashboard({
            el:"#fun-dashboard"
        });
        // orgs
        fun.instances.orgs = new fun.views.orgs({
            el:"#fun-orgs"
        });
        // profile
        fun.instances.profile = new fun.views.profile({
            el:"#fun-profile"
        });
        // members
        fun.instances.members = new fun.views.members({
            el:"#fun-members"
        });
        // teams
        fun.instances.teams = new fun.views.teams({
            el:"#fun-teams"
        });
        // tasks
        fun.instances.tasks = new fun.views.tasks({
            el:"#fun-tasks"
        });
        // contact
        fun.instances.contact = new fun.views.contact({
            el:"#fun-contact"
        });
        // contacts
        fun.instances.contacts = new fun.views.contacts({
            el:"#fun-contacts"
        });
        // assets
        fun.instances.assets = new fun.views.assets({
            el:"#fun-assets"
        });
        // currencies
        fun.instances.currencies = new fun.views.currencies({
            el:"#fun-currencies"
        });
        // deposit
        fun.instances.deposit = new fun.views.deposit({
            el:"#fun-deposit"
        });
        // stocks
        fun.instances.stocks = new fun.views.stocks({
            el:"#fun-stocks"
        });
        // withdraw
        fun.instances.withdraw = new fun.views.withdraw({
            el:"#fun-withdraw"
        });
        // accounts
        fun.instances.accounts = new fun.views.accounts({
            el:"#fun-accounts"
        });
        // resources
        fun.instances.resources = new fun.views.resources({
            el:"#fun-resources"
        });
        // messages
        fun.instances.messages = new fun.views.messages({
            el:"#fun-messages"
        });
        // about
        fun.instances.about = new fun.views.about({
            el:"#fun-about"
        });
        // binary
        fun.instances.binary = new fun.views.binary({
            el:"#fun-binary"
        });
        // education
        fun.instances.education = new fun.views.education({
            el:"#fun-education"
        });
        // redeem
        fun.instances.redeem = new fun.views.redeem({
            el:"#fun-redeem"
        });
        // purchase
        fun.instances.purchase = new fun.views.purchase({
            el:"#fun-purchase"
        });
        // beginner
        fun.instances.beginner = new fun.views.beginner({
            el:"#fun-beginner"
        });
        // intermediate
        fun.instances.intermediate = new fun.views.intermediate({
            el:"#fun-intermediate"
        });
        // expert
        fun.instances.expert = new fun.views.expert({
            el:"#fun-expert"
        });
        // elite
        fun.instances.elite = new fun.views.elite({
            el:"#fun-elite"
        });
        // categorizer
        fun.instances.categorizer = new fun.views.categorizer({
            el:"#fun-categorizer"
        });
        // risk
        fun.instances.risk = new fun.views.risk({
            el:"#fun-risk"
        });
        // trader
        fun.instances.trader = new fun.views.trader({
            el:"#fun-trader"
        });
        // reports
        fun.instances.reports = new fun.views.reports({
            el:"#fun-reports"
        });
        // signup
        fun.instances.signup = new fun.views.signup({
            el:"#fun-signup"
        });
        // settings
        fun.instances.settings = new fun.views.settings({
            el:"#fun-settings"
        });
        // extra
        fun.instances.extra = new fun.views.extra({
            el:"#fun-extra"
        });
        // footer
        fun.instances.footer = new fun.views.footer({
            el:"#fun-footer"
        });
    },

    home: function(){
        'use strict';
        console.log('getting account and context');
        // get account and context
        this.account = localStorage.getItem("username");
        this.context = sessionStorage.getItem("context");
        console.log(this.account, this.context);
        // cognitive, i don't know car engine by account and context.
        if (this.account === this.context){
            console.log('account same as context');
        } else {
            console.log('missing or different context');
        }
        // see if user is inside the dungeon or out of the dungeon.
        if(fun.utils.loggedIn()){
            fun.utils.redirect(fun.conf.hash.profile);
        } else {
            fun.utils.redirect(fun.conf.hash.landing);
        }
    },

    landing: function(){
        'use strict';
        fun.utils.hideAll();
        fun.instances.navbar.render();
        /*fun.instances.landing.render();
        fun.instances.extra.render();*/
        fun.instances.about.render();
        fun.instances.footer.render();
    },

    terms: function(){
        'use strict';
        var terms = translate('terms');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(terms);
        fun.instances.terms.render();
        fun.instances.footer.render();
    },

    about: function(){
        'use strict';
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.about.render();
        fun.instances.footer.render();
    },

    binary: function(){
        'use strict';
        var binary = translate('binary');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(binary);
        fun.instances.binary.render();
        fun.instances.footer.render();
    },

    elite: function(){
        'use strict';
        var elite = translate('elite');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(elite);
        fun.instances.elite.render();
        fun.instances.footer.render();
    },

    expert: function(){
        'use strict';
        var expert = translate('expert');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(expert);
        fun.instances.expert.render();
        fun.instances.footer.render();
    },

    intermediate: function(){
        'use strict';
        var intermediate = translate('intermediate');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(intermediate);
        fun.instances.intermediate.render();
        fun.instances.footer.render();
    },

    beginner: function(){
        'use strict';
        var beginner = translate('beginner');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(beginner);
        fun.instances.beginner.render();
        fun.instances.footer.render();
    },

    purchase: function(){
        'use strict';
        var purchase = translate('purchase');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(purchase);
        fun.instances.purchase.render();
        fun.instances.footer.render();
    },

    redeem: function(){
        'use strict';
        var redeem = translate('redeem');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(redeem);
        fun.instances.redeem.render();
        fun.instances.footer.render();
    },

    categorizer: function(){
        'use strict';
        var categorizer = translate('categorizer');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(categorizer);
        fun.instances.categorizer.render();
        fun.instances.footer.render();
    },

    risk: function(){
        'use strict';
        var risk = translate('marketRiskAnalyst');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(risk);
        fun.instances.risk.render();
        fun.instances.footer.render();
    },

    trader: function(){
        'use strict';
        var trader = translate('trader');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(trader);
        fun.instances.trader.render();
        fun.instances.footer.render();
    },

    education: function(){
        'use strict';
        var education = translate('education');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(education);
        fun.instances.education.render();
        fun.instances.footer.render();
    },

    messages: function(){
        'use strict';
        var messages = translate('messages');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(messages);
        fun.instances.messages.render();
        fun.instances.footer.render();
    },

    tasks: function(){
        'use strict';
        var tasks = translate('tasks'),
            account,
            context,
            vonCount = 0,
            resources,
            resource,
            onSuccess;

        // get account and context
        account = localStorage.getItem("username");
        context = sessionStorage.getItem("context");

        console.log(
            fun.utils.format('username: %s, context: %s', account, context)
        );

        resources = {
            
            user: new fun.models.User({'account':account}),
            tasks: new fun.models.Tasks(),
            now: new fun.models.TasksNow(),
            later: new fun.models.TasksLater(),
            done: new fun.models.TasksDone(),
        };

        onSuccess = function(){
            if(++vonCount === _.keys(resources).length){
                console.log('get resources success!');

                fun.instances.tasks.renderTasksList(
                    resources.tasks
                );

                fun.instances.settings.setProfileInformation(
                    resources.user
                );

                fun.instances.tasks.renderNowTasksList(
                    resources.now
                );

                fun.instances.tasks.renderLaterTasksList(
                    resources.later
                );

                fun.instances.tasks.renderDoneTasksList(
                    resources.done
                );
            }
        };

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.navbar.renderDropdown();
            fun.instances.subheader.render(tasks);
            fun.instances.subheader.renderHeadNav();
            
            fun.instances.tasks.render();

            for (resource in resources){
                resources[resource].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('fuck error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }

        fun.instances.footer.render();
    },

    companies: function(){
        'use strict';
        var companies = translate('companies'),
            account,
            context,
            vonCount = 0,
            resources,
            resource,
            onSuccess;

        // get account and context
        account = localStorage.getItem("username");
        context = sessionStorage.getItem("context");

        console.log(
            fun.utils.format('username: %s, context: %s', account, context)
        );

        resources = {
            //account: new fun.models.Account({'account':account}),
            user: new fun.models.User({'account':account}),
            companies: new fun.models.Companies(),
            active: new fun.models.CompaniesActive(),
            disable: new fun.models.CompaniesDisable(),
            suspended: new fun.models.CompaniesSuspended()
        };

        onSuccess = function(){
            if(++vonCount === _.keys(resources).length){
                console.log('get resources success!');
                fun.instances.companies.renderCompaniesList(
                    resources.companies
                );
                fun.instances.settings.setProfileInformation(
                    resources.user
                );
                fun.instances.companies.renderActiveCompaniesList(
                    resources.active
                );
                fun.instances.companies.renderDisableCompaniesList(
                    resources.disable
                );
                fun.instances.companies.renderSuspendedCompaniesList(
                    resources.suspended
                );
            }
        };

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.navbar.renderDropdown();
            fun.instances.subheader.render(companies);
            fun.instances.subheader.renderHeadNav();
            
            fun.instances.companies.render();

            for (resource in resources){
                resources[resource].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('fuck error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }

        fun.instances.footer.render();
    },

    privacy: function(){
        'use strict';
        var privacy = translate('privacy');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(privacy);
        fun.instances.privacy.render();
        fun.instances.footer.render();
    },

    security: function(){
        'use strict';
        var security = translate('security');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(security);
        fun.instances.security.render();
        fun.instances.footer.render();
    },

    assets: function(){
        'use strict';
        var assets = translate('assets');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(assets);
        fun.instances.subheader.renderHeadNavProfile();
        fun.instances.assets.render();
        fun.instances.footer.render();
    },

    currencies: function(){
        'use strict';
        var currencies = translate('currencies');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(currencies);
        fun.instances.subheader.renderHeadNavProfile();
        fun.instances.currencies.render();
        fun.instances.footer.render();
    },

    stocks: function(){
        'use strict';
        var stocks = translate('stocks');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(stocks);
        fun.instances.subheader.renderHeadNavProfile();
        fun.instances.stocks.render();
        fun.instances.footer.render();
    },

    deposit: function(){
        'use strict';
        var deposit = translate('deposit');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(deposit);
        fun.instances.deposit.render();
        fun.instances.footer.render();
    },

    withdraw: function(){
        'use strict';
        var withdraw = translate('withdraw');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(withdraw);
        fun.instances.withdraw.render();
        fun.instances.footer.render();
    },

    contact: function(){
        'use strict';
        var contact = translate('contact');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(contact);
        fun.instances.contact.render();
        fun.instances.footer.render();
    },

    status: function(){
        'use strict';
        var status = translate('status');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(status);
        fun.instances.status.render();
        fun.instances.footer.render();
    },

    help: function(){
        'use strict';
        var help = translate('help');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.navbar.renderDropdown();
        fun.instances.subheader.render(help);
        fun.instances.help.render();
        fun.instances.footer.render();
    },

    teams: function(){
        'use strict';
        var vonCount = 0,
            resources,
            resource,
            account,
            context,
            teams,
            onSuccess;

        teams = translate('teams');

        context = sessionStorage.getItem("context");

        console.log(context);
        // Yeah resources bitch! fucking missing since years ago...
        resources = {
            org: new fun.models.Org({'account':context})
        };

        onSuccess = function(){
            if(++vonCount === _.keys(resources).length){
                console.log('get resources success!');
                fun.instances.teams.render(
                    resources.org
                );
            }
        };

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render(teams);
            fun.instances.subheader.renderHeadNav();
            //fun.instances.teams.render();
            for (resource in resources){
                resources[resource].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('fuck error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }

        fun.instances.footer.render();
    },

    members: function(){
        'use strict';
        var vonCount = 0,
            resources,
            resource,
            account,
            context,
            members,
            onSuccess;

        members = translate('members');

        context = sessionStorage.getItem("context");

        console.log(context);
        resources = {
            org: new fun.models.Org({'account':context})
        };

        onSuccess = function(){
            if(++vonCount === _.keys(resources).length){
                console.log('get resources success!');

                fun.instances.members.render(
                    resources.org
                );
            }
        };

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render(members);
            fun.instances.subheader.renderHeadNav();

            // render memberss view
            //fun.instances.members.render();

            for (resource in resources){
                resources[resource].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('fuck error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }

        fun.instances.footer.render();
    },

    contacts: function(page){
        'use strict';
        var contacts,
            vonCount,
            resources,
            resource,
            onSuccess;

        contacts = translate('contacts');
        // and now for something completely different
        vonCount = 0;
        
        resources = {
            contacts: new fun.models.Contacts(),
            directories: new fun.models.Directories()
        };

        onSuccess = function(){
            if(++vonCount === _.keys(resources).length){
                console.log('get resources success!');

                fun.instances.contacts.renderContactLists(
                    resources.contacts
                );

                fun.instances.contacts.renderDirectoryLists(
                    resources.directories
                );
            }
        };

        if (isNaN(page)) {
            page = 1;
        }

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.navbar.renderDropdown();
            fun.instances.subheader.render(contacts);
            fun.instances.subheader.renderHeadNav();
            // render contacts view
            fun.instances.contacts.render();

            for (resource in resources){
                resources[resource].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('fuck error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }
        fun.instances.footer.render();
    },

    signup: function(){
        'use strict';
        var signup = translate('signUp');
        if(fun.utils.loggedIn()){
            fun.utils.redirect(fun.conf.hash.profile);
        } else {
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render(signup);
            fun.instances.signup.render();
        }
        fun.instances.footer.render();
    },

    login: function(){
        'use strict';
        var login = translate('login');
        if(fun.utils.loggedIn()){
            fun.utils.redirect(fun.conf.hash.profile);
        } else {
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render(login);
            fun.instances.login.render();
        }

        fun.instances.footer.render();
    },

    dashboard: function(account, org){
        'use strict';
        var account,
            vonCount = 0,
            models,
            onSuccess,
            dashboard,
            message;

        console.log(
            fun.utils.format('account: %s, organization: %s', account, org)
        );

        if (!account){
            account = localStorage.getItem("username");
        } else {
            if (account.substring(0, 1) === ':') { 
                account = account.substring(1);
            }
        }
        
        models = {
            user: new fun.models.User({'account':account}),
            records: new fun.models.Records(),
            billing: new fun.models.Billing(),
            summary: new fun.models.Summary(),
            lapseSummary: new fun.models.LapseSummary({
                lapse: 'hours'
            })
        };

        if (org) {
            models.org = new fun.models.Org({'account': org});
            
            // Set custom url tree, it's not a tree but you got it...
            // window.history.pushState('orgDashboard', 'Dashboard', '/orgs/iofun/dashboard');
        }

        onSuccess = function(){
            if(++vonCount === _.keys(models).length){
                console.log('spawn daemon success!');

                fun.instances.navbar.renderAccountDropdown(
                    models.user
                );

                fun.instances.dashboard.renderTodaySummary(
                    models.summary, models.billing
                );

                fun.instances.dashboard.renderLatestRecords(
                    models.records
                );
                  
                fun.instances.dashboard.renderRecordType();

                // set profile info
                fun.instances.settings.setProfileInformation(
                    models.user
                );
            }
        };

        if(fun.utils.loggedIn()){

            dashboard = translate('dashboard');

            fun.utils.hideAll();
            fun.instances.navbar.render();

            fun.instances.subheader.render(dashboard);
            fun.instances.subheader.renderHeadNav();

            fun.instances.dashboard.render();
            for (message in models){
                models[message].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }
        fun.instances.footer.render();
    },

    orgs: function(){
        'use strict';
        var organizations = translate('organizations');
        
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.navbar.renderDropdown();
        fun.instances.subheader.render(organizations);
        fun.instances.subheader.renderHeadNav();
        fun.instances.orgs.render();
        
        fun.instances.footer.render();
    },

    profile: function(){
        'use strict';
        var account,
            vonCount = 0,
            resources,
            resource,
            onSuccess,
            profile = translate('binaryOptions'),
            startEnd,
            startEndLapse,
            startLapse,
            message;


        if (!account){
            account = localStorage.getItem("username");
        } else {
            if (account.substring(0, 1) === ':') { 
                account = account.substring(1);
            }
        }
        
        startEnd = {
            start:this.start,
            end:this.end
        };

        startEndLapse = {
            start:this.start,
            end:this.end,
            // get time lapse from dom
            // lapse:this.lapse,
            lapse:'hours'
        };

        startLapse = {
            start:moment.utc().startOf('hour').unix(),
            lapse:'hours'
        }

        resources = {
            user: new fun.models.User({'account':account}),
            currencies: new fun.models.Currencies(),
            lapseCurrenciesStart: new fun.models.LapseCurrenciesStart(startLapse),
            trades: new fun.models.Trades(),
        };

        onSuccess = function(){
            if(++vonCount === _.keys(resources).length){
                console.log('get resources success!');

                fun.instances.trades.renderTradesList(
                    resources.trades
                );

                fun.instances.settings.setProfileInformation(
                    resources.user
                );
            }
        };


        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.navbar.renderDropdown();
        fun.instances.subheader.render(profile);
        fun.instances.subheader.renderHeadNavProfile();
        fun.instances.profile.render();


        for (resource in resources){
            resources[resource].fetch({
                success: onSuccess,
                error: function() {
                    console.log('fuck error!');
                }
            });
        }

        
        if (account !== 'satan'){
            fun.utils.hideAmounts();
            $('#all-history-trades').removeClass('show').addClass('hide');
            $('#current-250').removeClass('hide').addClass('show');

        }


        if (account === 'drknockboot560@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-drkno').removeClass('hide');
            $('#current-budget').removeClass('show').addClass('hide'); // uli este es el default que ricardo pidio para los demo account con un saldo de 250 exp points
            $('#current-250').removeClass('show').addClass('hide');

        }

        if (account === 'imcy123@aol.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-imcy').removeClass('hide');
            $('#current-1126').removeClass('hide').addClass('show');

        }


        if (account === 'luanne.thorman@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();

            $('#current-666').removeClass('hide').addClass('show');

        }


        if (account === 'village71480@yahoo.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-village').removeClass('hide');
            $('#current-652').removeClass('hide').addClass('show');

        }

        if (account === 'chadjennings29@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-village').removeClass('hide');
            $('#current-652').removeClass('hide').addClass('show');

        }


        if (account === 'isasbar1@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-village').removeClass('hide');
            $('#current-652').removeClass('hide').addClass('show');
        }

        if (account === 'ecker8415@yahoo.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-village').removeClass('hide');
            $('#current-652').removeClass('hide').addClass('show');
        }

        if (account === 'ireony555@aol.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-village').removeClass('hide');
            $('#current-652').removeClass('hide').addClass('show');

        }

        if (account === 'annkencl@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-village').removeClass('hide');
            $('#current-652').removeClass('hide').addClass('show');

        }

        if (account === 'jjplbgsdad@aol.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-village').removeClass('hide');
            $('#current-652').removeClass('hide').addClass('show');

        }

        if (account === 'allen.legel@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-the-house').removeClass("hide");
            $('#current-652').removeClass('hide').addClass('show');


        }


        if (account === 'affiliatemarketer3@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-affiliate').removeClass('hide');
            $('#current-879').removeClass('hide').addClass('show');


        }

        if (account === 'leonsilinker@yahoo.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-affiliate').removeClass('hide');
            $('#current-652').removeClass('hide').addClass('show');


        }


         if (account === 'chadjennings29@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-affiliate').removeClass('hide');
            $('#current-652').removeClass('hide').addClass('show');


        }


        if (account === 'ecker8415@yahoo.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-affiliate').removeClass('hide');
            $('#current-652').removeClass('hide').addClass('show');

        }

        if (account === 'mike2353@att.net'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-affiliate').removeClass('hide');
            $('#current-652').removeClass('hide').addClass('show');

        }


        //$(VEA ESTO JEAN);
           
        
        if (account === 'timetate@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-affiliate').removeClass('hide');
            $('#current-625').removeClass('hide').addClass('show');


        }


        if (account === 'oilmanreed@hotmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-oilmanreed').removeClass('hide');
            $('#current-2233').removeClass('hide').addClass('show');


        }


        if (account === 'toddp@cpbgc.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-todd').removeClass('hide');
            $('#current-10819').removeClass('hide').addClass('show');


        }



        if (account === 'minaran@aol.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-minaran').removeClass('hide');
            $('#current-250').removeClass('show').addClass('hide'); 
            


        }


        if (account === 'paul35coachmen@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-paul').removeClass('hide');
            $('#current-250').removeClass('show').addClass('hide'); 
            


        }


            if (account === 'greatsavings2012@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-greatsavings').removeClass('hide');
            $('#current-428').removeClass('show').addClass('hide');

        }



            if (account === 'winnerscircle@comcast.net'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-winnerscircle').removeClass('hide');
            $('#current-250').removeClass('show').addClass('hide'); 
            

        }



            if (account === 'ashanabey@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-ashanabey').removeClass('hide');
            $('#current-250').removeClass('hide').addClass('show'); 

        }



            if (account === 'mredd92@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-mredd').removeClass('hide');
            $('#current-6752').removeClass('hide').addClass('show');

        }



            if (account === 'dy2selfdaily@aol.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#all-history-trades').removeClass('hide');
            $('#current-150').removeClass('hide').addClass('show');

        }
        

            if (account === 'rjones629@yahoo.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-ron-jones').removeClass('hide');
            $('#current-2250').removeClass('hide').addClass('show');

        }



            if (account === 'chris.nicewanner@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-chris').removeClass('hide');
            $('#current-567').removeClass('hide').addClass('show');

        }



            if (account === 'khut297@yahoo.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-khut').removeClass('hide');
            $('#current-342').removeClass('hide').addClass('show');

        }


            if (account === 'tntnitro@comcast.net'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-tntnitro').removeClass('hide');
            $('#current-342').removeClass('hide').addClass('show');

        }


            if (account === 'oscara.melchor@hotmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-oscara').removeClass('hide');
            $('#current-567').removeClass('hide').addClass('show');

        }



            if (account === 'tjordansteele@yahoo.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-crazy-tracy').removeClass('hide');
            $('#current-3923').removeClass('hide').addClass('show');
        }
        

            if (account === 'incakid.leon34@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-the-incakid').removeClass('hide');
            $('#current-4670').removeClass('hide').addClass('show');
        }


            if (account === 'vwoodard1961@yahoo.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-vwoodard').removeClass('hide');
            $('#current-2534').removeClass('hide').addClass('show');

        }

            if (account === 'khern3@gmail.com.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-khern').removeClass('hide');
            $('#current-2534').removeClass('hide').addClass('show');

        }


            if (account === 'curtisperry14@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-curtis').removeClass('hide');
            $('#current-421').removeClass('hide').addClass('show');

        }


            if (account === 'annjosuccess@hotmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-annjosuccess').removeClass('hide');
            $('#current-367').removeClass('hide').addClass('show');
        }


            if (account === 'papilindo39@yahoo.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-papilindo').removeClass('hide');
            $('#current-344').removeClass('hide').addClass('show');
        }


        if (account === 'sabco02@gmail.com'){
            un.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-sabco').removeClass('hide');
            $('#current-367').removeClass('hide').addClass('show');

        }



        if (account === 'trader6000@gmail.com'){
            un.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-trader').removeClass('hide');
            $('#current-367').removeClass('hide').addClass('show');

        }



        if (account === 'desertmann@hushmail.com'){
            un.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-desertmann').removeClass('hide');
            $('#current-344').removeClass('hide').addClass('show');

        }



        if (account === 'lwellszero53@gmail.com'){
            un.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-lwellszero').removeClass('hide');
            $('#current-344').removeClass('hide').addClass('show');

        }

            if (account === 'larostr51@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-larostr').removeClass('hide');
            $('#current-384b').removeClass('hide').addClass('show');

        }

            if (account === 'thomaswswetz71@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-thomaswswetz').removeClass('hide');
            $('#current-471').removeClass('hide').addClass('show');

        }

            if (account === 'delightfulnita1@yahoo.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-delightfulnita').removeClass('hide');
            $('#current-471').removeClass('hide').addClass('show');

        }

            if (account === 'teamline01@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-teamline').removeClass('hide');
            $('#current-384b').removeClass('hide').addClass('show');

        }

            if (account === 'easyclick123@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-easyclick').removeClass('hide');
            $('#current-471').removeClass('hide').addClass('show');
        }




            if (account === 'ahmedrehman777@hotmail.com'){
            un.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-ahmedrehman').removeClass('hide');
            $('#current-384').removeClass('hide').addClass('show');

        }

            if (account === 'ap@parikh.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-aparikh').removeClass('hide');
            $('#current-384').removeClass('hide').addClass('show');
        }


            if (account === 'dmcmproperties@aol.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-dmcmproperties').removeClass('hide');
            $('#current-384').removeClass('hide').addClass('show');

        }

            if (account === 'youngpaul527@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-youngpaul').removeClass('hide');
            $('#current-384').removeClass('hide').addClass('show');

        }


            if (account === 'jubair.toha@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-jubair-toha').removeClass('hide');
            $('#current-111').removeClass('hide').addClass('show');

        }

            if (account === 'eljosmith@msn.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-eljosmith').removeClass('hide');
            $('#current-111').removeClass('hide').addClass('show');

        }

            if (account === 'ashleymarielove777@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-ashleymarielove').removeClass('hide');
            $('#current-111').removeClass('hide').addClass('show');

        }

            if (account === 'johnsontilldeath80@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-johnsontilldeath').removeClass('hide');
            $('#current-111').removeClass('hide').addClass('show');
        }

            if (account === 'rjs_productions@hotmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-rjs-productions').removeClass('hide');
            $('#current-275').removeClass('hide').addClass('show');
        }

            if (account === 'ashrafmalak@yahoo.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-ashrafmalak').removeClass('hide');
            $('#current-275').removeClass('hide').addClass('show');

        }

            if (account === 'lilustreci@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-lilustreci').removeClass('hide');
            $('#current-275').removeClass('hide').addClass('show');

        }

            if (account === 'benniecurrey@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-benniecurrey').removeClass('hide');
            $('#current-384b').removeClass('hide').addClass('show');

        }

            if (account === 'christopherruxer@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-christopherruxer').removeClass('hide');
            $('#current-384b').removeClass('hide').addClass('show');

        }


            if (account === 'rachel.whitlow@icloud.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-whitlow').removeClass('hide');
            $('#current-384b').removeClass('hide').addClass('show');

        }


            if (account === 'billyjoe1974@gmail.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-billyjoe').removeClass('hide');
            $('#current-338').removeClass('hide').addClass('show');

        }


            if (account === 'billyt1174@aol.com'){
            fun.utils.hideAmounts();
            fun.utils.hideAccountsHistory();
            $('#wipe-billyt').removeClass('hide');
            $('#current-338').removeClass('hide').addClass('show');

        }



        
        fun.instances.footer.render();
    },

    reports: function(page){
        'use strict';
        if(fun.utils.loggedIn()){
            var reports = translate('reports');
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.navbar.renderDropdown();
            fun.instances.subheader.render(reports);
            fun.instances.subheader.renderHeadNavReports();

            fun.instances.reports.render();
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }
        
        fun.instances.footer.render();
    },

    settings: function(){
        'use strict';
        this.account = localStorage.getItem("username");
        var settings = translate('settings');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.navbar.renderDropdown();
        fun.instances.subheader.render(settings);
        fun.instances.subheader.renderHeadNav();
        fun.instances.settings.render(this.account);
        fun.instances.footer.render();
    },

    logout: function(){
        'use strict';
        var goodBye = translate('goodBye'),
            onSuccess;

        // the stupid shit with the navbar on logout is probably related to this.

        onSuccess = function(){
            fun.instances.navbar.render()
            fun.instances.navbar.renderDropdown();
        };

        fun.utils.hideAll();

        fun.utils.logout({
            success: function() {
                console.log('fuck error with kika and success!');
            },
            error: onSuccess
        });

        fun.instances.subheader.render(goodBye);      
        fun.instances.login.render();
        fun.instances.footer.render();
    }
});

// init the shit out of this
$(function(){
    fun.instances.router = new fun.Router();
    Backbone.history.start();
});
