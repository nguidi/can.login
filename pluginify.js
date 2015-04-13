var	pluginifier
=	require('steal-tools').pluginifier
,	fs
=	require('fs')

pluginifier(
	{
		config:	__dirname+'/stealconfig.js'
	,	main:	'login'
	}
).then(
	function(pluginify)
	{
		// Get the main module, ignoring a dependency we don't want.
		var loginPlugin
		=	pluginify(
				'login'
		,	{
				ignoreAllDependencies:		true
			,	minify:						true
			,	removeDevelopmentCode:		true
			,	useNormalizedDependencies:	false
			,	format:						'steal'
			}
		)

		// writes the pluginified module.
		fs.writeFileSync(
			'login.min.js'
		,	loginPlugin
		,	'utf8'
		)
	}
)