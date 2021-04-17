const { helpers } = require('chart.js');
const path= require('path');
const webpack= require('webpack');
const ENV=process.env.NODE_ENV =process.env.NODE_ENV='developement';
const HtmlWebpackPlugin= require('html-webpack-plugin')
module.exports={


    entry:{
        'ng1':'./public/index.ts'
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
    minChunks:Infinity
}),
new HtmlWebpackPlugin({
    template:'config/index.html'
}),
new webpack.DefinePlugin(
    {
        'process.env':{
            'ENV':JSON.stringify(ENV)
        }
    }
)
            }
         ]
    }
}