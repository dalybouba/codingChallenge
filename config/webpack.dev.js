const { helpers } = require('chart.js');
const path= require('path');
const webpack= require('webpack');
const ENV=process.env.NODE_ENV =process.env.NODE_ENV='developement';
const HtmlWebpackPlugin= require('html-webpack-plugin')
module.exports={


    entry:{
        'polyfills':'./polyfills.ts',
        'vendor':'./vendors.ts',
        'ng1':'./index.ts',
        'app':'./main.ts'
    },
    output:{
        path: helpers.root('dist/dev'),
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
             loaders:['awsome-typescript-loader','angular2-template-loader']
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
new webpack.optimize.CommonsChunkPlugin({
    name:'vendor',
    minChunks:Infinity
}),
new HtmlWebpackPlugin({
    template:'config/index.html',
    chunks:['app']
}),
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