Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:[{ html:'Our first app!'}, {xtype: 'rallyiterationcombobox'}, {xtype: 'rallyreleasecombobox'}], 
    layout: 'hbox',
    launch: function() {
        //Write app code here
        console.log('our first app v2');
        //API Docs: https://help.rallydev.com/apps/2.0/doc/
    }
});
