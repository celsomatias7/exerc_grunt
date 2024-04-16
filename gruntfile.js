module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: { //para compilarmos o less dentro do grunt
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dev/styles/main.min.css' : 'src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],  // "**" para acessar qualquer pasta dentro do diretório e "*" para acessar qualquer arquivo
                tasks: ['less:development']
            },
            html: { //para o Watch observar mudanças no HTML
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }
        },
        uglify: {
            target: {
                files: {
                    'dev/scripts/main.min.js' : 'src/scripts/main.js' //sempre primeiro coloca o destino e depois o arquivo origem, lembrando que este plugin é para minificar o arquivo
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default' , ['watch']);
    grunt.registerTask('build' , ['less:production', 'uglify']);
}