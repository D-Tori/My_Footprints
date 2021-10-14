/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')  // index.html 파일을 dist 폴더에 index_bundle.js 파일과 함께 자동으로 생성
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode: 'development', // mode : devlopment(개발용), production(배포용), none 3가지 모드가 있다
  entry: './src/index.ts', // entry : 웹팩을 실행할 대상 파일
  output: { // output : 웹팩의 결과물에 대한 정보를 입력하는 속성
    path: path.resolve(__dirname, './dist'), // 결과물 경로 //  __dirname : 현재 디렉토리, dist 폴더에 모든 컴파일된 하나의 번들파일을 넣을 예정
    filename: 'bundle.js' // 결과물 파일명
  },  
  resolve: { // resolve : 웹팩이 모듈을 처리하는 방식을 설정하는 속성으로 확장자를 생략해도 인식하게 만든다.
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  devtool: 'eval-cheap-source-map', // devtool : source-map을 설정하는 부분으로 에러가 발생했을 때 번들링된 파일에서 어느 부분에 에러가 났는지를 쉽게 확인할 수 있게 해주는 도구
  devServer: {  // devServer : webpack-dev-server의 옵션 설정
    port: 5500,
    hot: true  // hot : 모듈의 변화만 자동으로 로드하는 HMR(Hot Module Replacement) 기능 활성화 설정
  },
  module: {  // 모듈에 적용할 로더들과 그 옵션들을 설정
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: '/node_modules/',
      },
      {
        test: /\.(js|jsx)$/,  // test : 어떤 파일에 적용할지 확장자 작성
        exclude: '/node_modules/',  // exclude : 로더에서 제외할 파일 설정
        loader: 'babel-loader'  // loader : 적용할 로더가 1개라면 loader로 설정
      },
      {
        test: /\.(css|scss|sass)$/,
        // use: ['style-loader', 'css-loader'],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']  // use : 적용할 로더가 2개 이상이면 use 배열로 설정
      },
      {
        test: /\.(jpeg|jpg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({  // HTMLWebpackPlugin이 index.html의 script 태그안에 컴파일된 bundle 파일을 심어준다.
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({ filename: 'app.css' })
  ]
};