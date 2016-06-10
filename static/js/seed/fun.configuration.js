/*
 Configuration seed 
*/
fun.conf = {
    // username account
    account: 'account',

    // organization context point of view
    context: 'context',

    // html templates
    html: '/static/html',

    // internet domain
    domain: 'binarymachine.io',

    // seed url root
    urlRoot: '/api/',

    // system uuid's
    uuidRecord: 'record_uuid',
    uuidBilling: 'billing_uuid',
    uuidCalendar: 'calendar_uuid',
    uuidCurrency: 'currency_uuid',
    uuidMonitor: 'monitor_uuid',
    uuidAddress: 'address_uuid',
    uuidAlert: 'alert_uuid',
    uuidContact: 'contact_uuid',
    uuidTask: 'task_uuid',
    uuidTrade: 'trade_uuid',
    uuidCompany: 'company_uuid',
    uuidDirectory: 'directory_uuid',
    uuidPricing: 'pricing_uuid',
    
    uuidAccount: 'account_uuid',
    uuidResource: 'resource_uuid',
    uuidMessage: 'message_uuid',
    // you need to think on time

    lapse: 'lapse',
    startTime: 'start_time',
    endTime: 'end_time',

    // pagination settings
    first: 'first',
    last: 'last',
    next: 'next',
    previous: 'previous',
    pageNumber: 'page_number',
    pageSize: 'page_size',
    pageSmall: 8,
    pageMedium: 13,
    pageBig: 21
};

/*
 Common timeouts, compare this with overlord protocol
*/
fun.conf.timeouts = {
    big: 8000,
    medium: 5000,
    small: 3000
};

/*
 System urls
*/
fun.conf.urls = { 
    login: '/login/',
    logout: '/logout/',
    user: fun.utils.format('/users/%s', fun.conf.account),
    users: '/users/',
    usersActive: '/users/active/',
    usersDisable: '/users/disable/',
    usersSuspended: '/users/suspended/',
    userRegister: fun.utils.format('/users/%s/register/', fun.conf.account),
    org: fun.utils.format('/orgs/%s', fun.conf.account),
    orgs: '/orgs/',
    record: fun.utils.format('/records/%s', fun.conf.uuidRecord),
    records: '/records/',
    billing: fun.utils.format('/billings/%s', fun.conf.uuidBilling),
    billings: '/billings/',


    currency: fun.utils.format('/currencies/%s', fun.conf.uuidCurrency),
    currencies: '/currencies/',

    lapseCurrenciesStart: fun.utils.format('/currencies/%s/start/%s', fun.conf.lapse, fun.conf.startTime),
    lapseCurrenciesStartEnd: fun.utils.format('/currencies/%s/start/%s/end/%s', fun.conf.lapse, fun.conf.startTime, fun.conf.endTime),

    lapseCurrency: fun.utils.format('/currencies/%s', fun.conf.lapse),

    lapseCurrencies: fun.utils.format('/currencies/%s', fun.conf.lapse),
    lapseCurrencyStart: fun.utils.format('/currencies/%s/start/%s', fun.conf.lapse, fun.conf.startTime),
    lapseCurrencyStartEnd: fun.utils.format('/currencies/%s/start/%s/end/%s', fun.conf.lapse, fun.conf.startTime, fun.conf.endTime),
    


    trade: fun.utils.format('/trades/%s', fun.conf.uuidTrade),
    trades: '/trades/',
    lapseTradesStart: fun.utils.format('/trades/%s/start/%s', fun.conf.lapse, fun.conf.startTime),
    lapseTradesStartEnd: fun.utils.format('/trades/%s/start/%s/end/%s', fun.conf.lapse, fun.conf.startTime, fun.conf.endTime),
    lapseTrade: fun.utils.format('/trades/%s', fun.conf.lapse),
    lapseTrades: fun.utils.format('/trades/%s', fun.conf.lapse),
    lapseTradeStart: fun.utils.format('/trades/%s/start/%s', fun.conf.lapse, fun.conf.startTime),
    lapseTradeStartEnd: fun.utils.format('/trades/%s/start/%s/end/%s', fun.conf.lapse, fun.conf.startTime, fun.conf.endTime),



    pricing: fun.utils.format('/pricings/%s', fun.conf.uuidPricing),
    pricings: '/pricings/',
    calendars: '/calendars/',
    monitors: '/monitors/',
    summary: '/records/summary/',
    summaries: '/records/summaries/',
    summaryStart: fun.utils.format('/records/summary/start/%s', fun.conf.startTime),
    summaryStartEnd: fun.utils.format('/records/summary/start/%s/end/%s', fun.conf.startTime, fun.conf.endTime),
    summariesStart: fun.utils.format('/records/summaries/start/%s', fun.conf.startTime),
    summariesStartEnd: fun.utils.format('/records/summaries/start/%s/end/%s', fun.conf.startTime, fun.conf.endTime),
    lapseSummary: fun.utils.format('/records/summary/%s', fun.conf.lapse),


    lapseSummaries: fun.utils.format('/records/summaries/%s', fun.conf.lapse),
    lapseSummaryStart: fun.utils.format('/records/summary/%s/start/%s', fun.conf.lapse, fun.conf.startTime),
    lapseSummaryStartEnd: fun.utils.format('/records/summary/%s/start/%s/end/%s', fun.conf.lapse, fun.conf.startTime, fun.conf.endTime),
    lapseSummariesStart: fun.utils.format('/records/summaries/%s/start/%s', fun.conf.lapse, fun.conf.startTime),
    lapseSummariesStartEnd: fun.utils.format('/records/summaries/%s/start/%s/end/%s', fun.conf.lapse, fun.conf.startTime, fun.conf.endTime),
    recordsStart: fun.utils.format('/records/start/%s', fun.conf.startTime),
    recordsStartEnd: fun.utils.format('/records/start/%s/end/%s', fun.conf.startTime, fun.conf.endTime),
    billingsRecord: fun.utils.format('/billings/records/%s', fun.conf.uuidRecord),
    billingsRecords: '/billings/records/',
    billingsStart: fun.utils.format('/billings/start/%s', fun.conf.startTime),
    billingsStartEnd: fun.utils.format('/billings/start/%s/end/%s', fun.conf.startTime, fun.conf.endTime),
    billingsRecordsStart: fun.utils.format('/billings/records/start/%s', fun.conf.startTime),
    billingsRecordsStartEnd: fun.utils.format('/billings/records/start/%s/end/%s', fun.conf.startTime, fun.conf.endTime),
    contact: fun.utils.format('/contacts/%s', fun.conf.uuidContact),
    contacts: '/contacts/',
    task: fun.utils.format('/tasks/%s', fun.conf.uuidTask),
    tasks: '/tasks/',
    tasksDone: '/tasks/done/',
    tasksNow: '/tasks/now/',
    tasksLater: '/tasks/later/',
    address: fun.utils.format('/addresses/%s', fun.conf.uuidAddress),
    addresses: '/addresses/',
    addressesPrimary: '/addresses/primary/',
    resource: fun.utils.format('/resources/%s', fun.conf.uuidResource),
    resources: '/resources/',
    resourcesImps: '/resources/imps/',
    resourcesNodes: '/resources/nodes/',
    message: fun.utils.format('/messages/%s', fun.conf.uuidMessage),
    messages: '/messages/',
    company: fun.utils.format('/companies/%s', fun.conf.uuidCompany),
    companies: '/companies/',
    companiesActive: '/companies/active/',
    companiesDisable: '/companies/disable/',
    companiesSuspended: '/companies/suspended/',
    directory: fun.utils.format('/directories/%s', fun.conf.uuidDirectory),
    directories: '/directories/',
    campaign: fun.utils.format('/campaigns/%s', fun.conf.uuidCampaign),
    campaignInbound: fun.utils.format('/inbound/campaigns/%s', fun.conf.uuidCampaign),
    campaignsActive: '/campaigns/active/',
    campaignsPaused: '/campaigns/paused/',
    campaignsInbound: '/inbound/campaigns/',
    campaignsOutbound: '/outbound/campaigns/',
    campaigns: '/campaigns/',
    alert: fun.utils.format('/alerts/%s', fun.conf.uuidAlert),
    alerts: '/alerts/',
    message: fun.utils.format('/messages/%s', fun.conf.uuidMessage),
    messages: '/messages/',
    messagesUnread: '/messages/unread/',
    messagesNotifications: '/messages/notifications/',
    messagesAlerts: '/messages/alerts/',
    sounds: fun.utils.format('/sounds/'),
    recording: fun.utils.format('/recordings/%s', fun.conf.uuidRecording),
    recordings: '/recordings/',
    recordingsInbound: '/recordings/inbound/',
    recordingsOutbound: '/recordings/outbound/',
    upload: '/upload/',
};

/*
 HTML templates
*/
fun.conf.templates = {
    workshop: fun.utils.format('%s/workshop.html', fun.conf.html),
    workspace: fun.utils.format('%s/workspace.html', fun.conf.html),
    navbar: fun.utils.format('%s/navbar.html', fun.conf.html),
    navLanding: fun.utils.format('%s/navLanding.html', fun.conf.html),
    navDashboard: fun.utils.format('%s/navDashboard.html', fun.conf.html),
    navAdmin: fun.utils.format('%s/navAdmin.html', fun.conf.html), // ultimate junk!
    subheader: fun.utils.format('%s/subheader.html', fun.conf.html),
    headNav: fun.utils.format('%s/headNav.html', fun.conf.html),
    headNavCampaigns: fun.utils.format('%s/headNavCampaigns.html', fun.conf.html),
    headNavReports: fun.utils.format('%s/headNavReports.html', fun.conf.html),
    headNavProfile: fun.utils.format('%s/headNavProfile.html', fun.conf.html),
    landing: fun.utils.format('%s/landing.html', fun.conf.html),
    education: fun.utils.format('%s/education.html', fun.conf.html),
    assets: fun.utils.format('%s/assets.html', fun.conf.html),
    currencies: fun.utils.format('%s/currencies.html', fun.conf.html),
    stocks: fun.utils.format('%s/stocks.html', fun.conf.html),
    deposit: fun.utils.format('%s/deposit.html', fun.conf.html),

    purchase: fun.utils.format('%s/purchase.html', fun.conf.html),
    redeem: fun.utils.format('%s/redeem.html', fun.conf.html),
    beginner: fun.utils.format('%s/beginner.html', fun.conf.html),
    intermediate: fun.utils.format('%s/intermediate.html', fun.conf.html),
    expert: fun.utils.format('%s/expert.html', fun.conf.html),
    elite: fun.utils.format('%s/elite.html', fun.conf.html),
    categorizer: fun.utils.format('%s/categorizer.html', fun.conf.html),

    withdraw: fun.utils.format('%s/withdraw.html', fun.conf.html),
    features: fun.utils.format('%s/features.html', fun.conf.html),
    calendars: fun.utils.format('%s/calendars.html', fun.conf.html),
    monitors: fun.utils.format('%s/monitors.html', fun.conf.html),
    enterprise: fun.utils.format('%s/enterprise.html', fun.conf.html),
    pricing: fun.utils.format('%s/pricing.html', fun.conf.html),
    status: fun.utils.format('%s/status.html', fun.conf.html),
    about: fun.utils.format('%s/about.html', fun.conf.html),
    binary: fun.utils.format('%s/binary.html', fun.conf.html),
    tasks: fun.utils.format('%s/tasks.html', fun.conf.html),
    allTasks: fun.utils.format('%s/allTasks.html', fun.conf.html),
    taskRow: fun.utils.format('%s/taskRow.html', fun.conf.html),
    taskListItem: fun.utils.format('%s/taskListItem.html', fun.conf.html),
    tasksNowTab: fun.utils.format('%s/tasksNowTab.html', fun.conf.html),
    tasksLaterTab: fun.utils.format('%s/tasksLaterTab.html', fun.conf.html),
    tasksDoneTab: fun.utils.format('%s/tasksDoneTab.html', fun.conf.html),
    recordings: fun.utils.format('%s/recordings.html', fun.conf.html),
    landingChart: fun.utils.format('%s/landingChart.html', fun.conf.html),
    recordingsAllTab: fun.utils.format('%s/recordingsAllTab.html', fun.conf.html),
    recordingsInboundTab: fun.utils.format('%s/recordingsInboundTab.html', fun.conf.html),
    recordingsOutboundTab: fun.utils.format('%s/recordingsOutboundTab.html', fun.conf.html),
    allRecordings: fun.utils.format('%s/allRecordings.html', fun.conf.html),
    recordingRow: fun.utils.format('%s/recordingRow.html', fun.conf.html),
    recordingListItem: fun.utils.format('%s/recordingListItem.html', fun.conf.html),
    accounts: fun.utils.format('%s/accounts.html', fun.conf.html),
    accountsAllTab: fun.utils.format('%s/accountsAllTab.html', fun.conf.html),
    accountsActiveTab: fun.utils.format('%s/accountsActiveTab.html', fun.conf.html),
    accountsUsersTab: fun.utils.format('%s/accountsUsersTab.html', fun.conf.html),
    accountsOrganizationsTab: fun.utils.format('%s/accountsOrganizationsTab.html', fun.conf.html),
    accountsDisableTab: fun.utils.format('%s/accountsDisableTab.html', fun.conf.html),
    accountsSuspendedTab: fun.utils.format('%s/accountsSuspendedTab.html', fun.conf.html),
    accountRow: fun.utils.format('%s/accountRow.html', fun.conf.html),
    accountListItem: fun.utils.format('%s/accountListItem.html', fun.conf.html),
    resources: fun.utils.format('%s/resources.html', fun.conf.html),
    resourcesAllTab: fun.utils.format('%s/resourcesAllTab.html', fun.conf.html),
    resourcesImpsTab: fun.utils.format('%s/resourcesImpsTab.html', fun.conf.html),
    resourcesNodesTab: fun.utils.format('%s/resourcesNodesTab.html', fun.conf.html),
    resourceRow: fun.utils.format('%s/resourceRow.html', fun.conf.html),
    resourceListItem: fun.utils.format('%s/resourceListItem.html', fun.conf.html),
    companies: fun.utils.format('%s/companies.html', fun.conf.html),
    allCompanies: fun.utils.format('%s/allCompanies.html', fun.conf.html),
    companiesActiveTab: fun.utils.format('%s/companiesActiveTab.html', fun.conf.html),
    companiesDisableTab: fun.utils.format('%s/companiesDisableTab.html', fun.conf.html),
    companiesSuspendedTab: fun.utils.format('%s/companiesSuspendedTab.html', fun.conf.html),
    companyRow: fun.utils.format('%s/companyRow.html', fun.conf.html),
    companyListItem: fun.utils.format('%s/companyListItem.html', fun.conf.html),
    help: fun.utils.format('%s/help.html', fun.conf.html),
    risk: fun.utils.format('%s/risk.html', fun.conf.html),
    trader: fun.utils.format('%s/trader.html', fun.conf.html),
    security: fun.utils.format('%s/security.html', fun.conf.html),
    terms: fun.utils.format('%s/terms.html', fun.conf.html),
    privacy: fun.utils.format('%s/privacy.html', fun.conf.html),
    signup: fun.utils.format('%s/signup.html', fun.conf.html),
    login: fun.utils.format('%s/login.html', fun.conf.html),
    dashboard: fun.utils.format('%s/dashboard.html', fun.conf.html),
    orgs: fun.utils.format('%s/orgs.html', fun.conf.html),
    accountListItem: fun.utils.format('%s/accountListItem.html', fun.conf.html),
    recordRow: fun.utils.format('%s/recordRow.html', fun.conf.html),
    typeRow: fun.utils.format('%s/typeRow.html', fun.conf.html),
    sumRow: fun.utils.format('%s/sumRow.html', fun.conf.html),
    lastRecord: fun.utils.format('%s/lastRecord.html', fun.conf.html),
    latestRecords: fun.utils.format('%s/latestRecords.html', fun.conf.html),
    recordType: fun.utils.format('%s/recordType.html', fun.conf.html),
    todaySummary: fun.utils.format('%s/todaySummary.html', fun.conf.html),
    todayActivityChart: fun.utils.format('%s/todayActivityChart.html', fun.conf.html),
    lastCampaign: fun.utils.format('%s/lastCampaign.html', fun.conf.html),
    latestCampaigns: fun.utils.format('%s/latestCampaigns.html', fun.conf.html),
    campaignType: fun.utils.format('%s/campaignType.html', fun.conf.html),
    todayCampaignSummary: fun.utils.format('%s/todayCampaignSummary.html', fun.conf.html),
    todayCampaignActivityChart: fun.utils.format('%s/todayCampaignActivityChart.html', fun.conf.html),
    dialpad: fun.utils.format('%s/dialpad.html', fun.conf.html),
    messages: fun.utils.format('%s/messages.html', fun.conf.html),
    messagesRow: fun.utils.format('%s/messagesRow.html', fun.conf.html),
    messagesAllTab: fun.utils.format('%s/messagesAllTab.html', fun.conf.html),
    messagesUnreadTab: fun.utils.format('%s/messagesUnreadTab.html', fun.conf.html),
    messagesNotificationsTab: fun.utils.format('%s/messagesNotificationsTab.html', fun.conf.html),
    messagesAlertsTab: fun.utils.format('%s/messagesAlertsTab.html', fun.conf.html),
    videos: fun.utils.format('%s/videos.html', fun.conf.html),
    controlTo: fun.utils.format('%s/controlTo.html', fun.conf.html),
    controlFrom: fun.utils.format('%s/controlFrom.html', fun.conf.html),
    findLapse: fun.utils.format('%s/findLapse.html', fun.conf.html),
    message: fun.utils.format('%s/message.html', fun.conf.html),
    messageSmall: fun.utils.format('%s/messageSmall.html', fun.conf.html),
    messageMedium: fun.utils.format('%s/messageMedium', fun.conf.html),
    messageLarge: fun.utils.format('%s/messageLarge', fun.conf.html),
    warning: fun.utils.format('%s/warning.html', fun.conf.html),
    warningSmall: fun.utils.format('%s/warningSmall.html', fun.conf.html),
    warningMedium: fun.utils.format('%s/warningMedium.html', fun.conf.html),
    warningLarge: fun.utils.format('%s/warningLarge.html', fun.conf.html),
    error: fun.utils.format('%s/error.html', fun.conf.html),
    errorSmall: fun.utils.format('%s/errorSmall.html', fun.conf.html),
    errorMedium: fun.utils.format('%s/errorMedium.html', fun.conf.html),
    errorLarge: fun.utils.format('%s/errorLarge.html', fun.conf.html),
    phone: fun.utils.format('%s/phone.html', fun.conf.html),
    profile: fun.utils.format('%s/profile.html', fun.conf.html),
    activity: fun.utils.format('%s/activity.html', fun.conf.html),
    members: fun.utils.format('%s/members.html', fun.conf.html),
    memberRow: fun.utils.format('%s/memberRow.html', fun.conf.html),
    teams: fun.utils.format('%s/teams.html', fun.conf.html),
    teamRow: fun.utils.format('%s/teamRow.html', fun.conf.html),
    contact: fun.utils.format('%s/contact.html', fun.conf.html),
    contacts: fun.utils.format('%s/contacts.html', fun.conf.html),
    allContacts: fun.utils.format('%s/allContacts.html', fun.conf.html),
    directoryList: fun.utils.format('%s/directoryList.html', fun.conf.html),
    contactRow: fun.utils.format('%s/contactRow.html', fun.conf.html),
    directoryRow: fun.utils.format('%s/directoryRow.html', fun.conf.html),
    sounds: fun.utils.format('%s/sounds.html', fun.conf.html),
    reports: fun.utils.format('%s/reports.html', fun.conf.html),
    settings: fun.utils.format('%s/settings.html', fun.conf.html),
    settingsOrgListItem: fun.utils.format('%s/settingsOrgListItem.html', fun.conf.html),
    extra: fun.utils.format('%s/extra.html', fun.conf.html),
    extraNavbar: fun.utils.format('%s/extraNavbar.html', fun.conf.html),
    extraNavLanding: fun.utils.format('%s/extraNavLanding.html', fun.conf.html),
    extraNavDashboard: fun.utils.format('%s/extraNavDashboard.html', fun.conf.html),
    social: fun.utils.format('%s/social.html', fun.conf.html),
    subscribe: fun.utils.format('%s/subscribe.html', fun.conf.html),
    footer: fun.utils.format('%s/footer.html', fun.conf.html),
    packages: fun.utils.format('%s/packages.html', fun.conf.html)
};

/*
 Hash tags for backbone.js router

 or

 Where the fuck are we using this shit up?
*/
fun.conf.hash = {
    home: '#home',
    landing: '#landing',
    features: '#features',
    enterprise: '#enterprise',
    education: '#education',

    redeem: '#redeem',
    purchase: '#purchase',
    beginner: '#beginner',
    intermediate: '#intermediate',
    expert: '#expert',
    elite: '#elite',
    categorizer: '#categorizer',
    forums: '#forums',
    trader: '#trader',
    risk: '#risk',

    terms: '#terms',
    privacy: '#privacy',
    security: '#security',
    status: '#status',
    help: '#help',
    signup: '#signup',
    login: '#login',

    contact: '#contact',
    assets: '#assets',
    stocks: '#stocks',
    deposit: '#deposit',
    withdraw: '#withdraw',

    accounts: '#accounts',
    messages: '#messages',
    resources: '#resources',
    dashboard : '#dashboard',
    dashboardWithAccount: '#dashboard/a{account}',
    profile: '#profile',
    profileWithAccount: '#profile/a{account}',
    activity: '#activity',
    orgs: '#orgs',
    trades: '#trades',
    nodes: '#nodes',
    members: '#members',
    teams: '#teams',
    phone: '#phone',
    reports: '#reports',
    reportsWithPage: '#reports/p{page}',
    
    contacts: '#contacts',
    cubes: '#cubes',
    contactsWithPage: '#contacts/p{page}',
    tasks: '#tasks',
    companies: '#companies',
    sounds: '#sounds',
    recordings: '#recordings',
    settings: '#settings',
    packages: '#packages',
};
