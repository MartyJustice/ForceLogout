Ext.namespace('Zarafa.plugins.forcelogout');

/**
 * @class Zarafa.plugins.forcelogout.ForceLogoutPlugin
 * @extends Zarafa.core.ThemePlugin
 *
 */

Zarafa.plugins.forcelogout.ForceLogoutPlugin  = Ext.extend(Zarafa.core.Plugin, {

    initPlugin : function() {
      Zarafa.onUIReady(function() {
        var mainmenu = document.getElementById("mainmenu-button-logout");
        mainmenu.style.zIndex='10000000';
        mainmenu.style.position='relative';
      })
    },
});


Zarafa.onReady(function() {
	container.registerPlugin(new Zarafa.core.PluginMetaData({
		name : 'forcelogout',
		displayName : _("Force Logout"),
		allowUserDisable : true,
		allowUserVisible : true,
		pluginConstructor : Zarafa.plugins.forcelogout.ForceLogoutPlugin
	}));
});
