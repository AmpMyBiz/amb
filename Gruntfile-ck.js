module.exports=function(e){e.loadNpmTasks("grunt-autoprefixer");e.initConfig({pkg:e.file.readJSON("package.json"),autoprefixer:{options:{},single_file:{src:"assets/css/style.css",dest:"assets/css/style.css"}}});e.registerTask("default",["autoprefixer"])};