module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader' 
      }, { 
        test: /\.js[x]?$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=es2015' 
      }, { 
        test: /\.js$/, 
        exclude: /(node_modules|bower_components)/, 
        loader: 'babel', 
        query: { presets: ['es2015'] } 
      }, { 
        test: /\.scss$/, 
        loaders: ["style", "css", "sass"] 
      }, {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader',
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
    ]
  },
};
