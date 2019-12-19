const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
//plugin 可以在webpack运行到某个时刻，自动帮你做些事情

module.exports={
	//线上代码使用
	// mode  : 'production',
	//devtool:'cheap-module-source-map',
	mode  : 'development',
	devtool:'cheap-module-eval-source-map',	
	module:{
		rules:[
		{ 
			//如果有js 就用babel-loader来编译 /node_modules/除外
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			options:{
				"presets": 
			  	[
				    "@babel/env",
				    {
				      targets: {
				        edge: "17",
				        firefox: "60",
				        chrome: "67",
				        safari: "11.1",
				      },
				      useBuiltIns: "usage",
				    },
			  	],

			}
		},
		{
			test:/\.(jpg|png|gif)$/,
			use:{
				// loader:'file-loader',
				loader:'url-loader',
				options:{
					//以原文件名+hash+格式命名 占位符 placeholders
					name:'[name]_[hash].[ext]',
					//打包到那个目录里
					outputPath:'images/',
					limit:20480

				}
			}
		},{
			test:/\.(eot|ttf|svg)$/,
			use:{
				loader:'file-loader',
				options:{
					//以原文件名+hash+格式命名
					name:'[name].[ext]',
					//打包到那个目录里
					outputPath:'iconfont/'				

				}
			}
		},
		{
			//如果打包时遇到css文件，那么要用相应的load来完成
			test:/\.scss$/,
			use:[
			'style-loader',
			{
				loader:'css-loader',
				options:{
					importLoaders:2,
					//开启css模块化打包
					modules:false
				}

			},
			'sass-loader',
			'postcss-loader'
			]
		}
		]

	},
	

	devServer:{
		contentBase:'./dist',
		open:true,
		port:8090,
		hot:true,
		//即使hot不生效 也不要自动刷新浏览器实现HMR热更新
		hotOnly:true
		//跨域代理		
		// proxy:{
		// 	'/api':'localhost:3000'
		// }
	},
	entry : {
		main:'./src/index.js'
		// sub:'./src/index.js'
	},
	plugins:[
	//打包结束后生成文件
		new HtmlWebpackPlugin({
			template:'./index.html'
		}),
		//不传参数是要删除的正是output.path
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
	,
	output:{
		// publicPath:'http://cdn.cdn.com.cn',
		publicPath:'/',
		filename:'[name]_[hash].js',
		path:path.resolve(__dirname,'dist')
	}
}