Ext.define('MyApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Willkommen',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Willkommen zu meiner Beispiel-App'
                },

                html: [
                    "Diese App wurde zur Einfuehrung in das 				Softwaretechnik-Projekt erstellt."
                ].join("")
            },
            {
                title: 'Button',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Sinnloser Knopf'
                    },
                    {
                        xtype: 'audio',
                        url:'lib/touch/src/sound/sound.mp3' ,
                        id: 'sound1',
				  autoplay:true,
				  hidden:true
                    },
			   {
				  xtype: 'button',				  				  align: 'center',
				  iconCls: 'action',
				  text: 'Sinnloser Knopf',
				  handler: function(){
				Ext.getCmp('#sound1').play(this,erg);					}
			   }
                ]
            },
		 {
			title:'Impressum',
			iconCls:'action',
			items:[
				{
					docked:'top',
					xtype:'titlebar',
					title:'Impressum'
				}
			],
			html: [
				"marcel.hedderich@mni.thm.de"
			].join("")
		 }
		 
        ]
    }
});
