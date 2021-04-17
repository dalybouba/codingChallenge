const { helpers } = require('./helpers');
const AotPlugin= require('@ngtools/webpack').AotPlugin;
const path= require('path');
const webpack= require('webpack');
const ENV=process.env.NODE_ENV =process.env.NODE_ENV='production';
const HtmlWebpackPlugin= require('html-webpack-plugin')
module.exports={


    entry:{
        'polyfills':'./polyfills.ts',
        'vendor':'./vendors-aot.ts',
        'app':'./main.ts'
    },
    output:{
        path: helpers.root('dist/aot'),
        publicPath:'/',
        filename:'[name].chunk.js'
    },
    resolve:{
        extensions:['.ts','.js']
    },
    module:{
         rules:[
             {
                 test: /\.ts$/,
             loaders:['ngtools/webpack']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            plugins: {

new webpack.optimize.CommonsChunkPlugin({
    name:'common',
    chunks:['vendor','app'],
    minChunks:2
}),

new AotPlugin({
    tsConfigPath:'./tsconfig.aot.json',
    entryModule:helpers.root('./app/app.module#AppModule')
})
new webpack.optimize.CommonsChunkPlugin({
    name:'vendor',
    minChunks:Infinity
}),
new HtmlWebpackPlugin({
    template:'config/index.html',
    chunks:['app']
}),
new webpack.optimize.UglifyJsPlugin({
    beautify:false,
    comment:false,
    compress:{
        warnings:false
    }
})
new webpack.DefinePlugin
(
    {
        'process.env':{
            'ENV':JSON.stringify(ENV)
        }
    }
),

new webpack.ContextReplacementPlugin(
    /angular(\\|\/)core(\\|\/)@angular/,
    helpers.root('./src')
)

new BundleAnalyzerPlugin({
    AnalyserMode:'static'
})
            }
         ]
    }
}