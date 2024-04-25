pipeline {
    agent {
        docker {
            image 'coexcz/node-alpine:v16.14.2'
            }
    }
    environment {
        HOME = '.'
    }
    triggers {
        pollSCM 'H/5 * * * *'
    }
    stages {
        stage ('Build') {
            steps {
                echo "Building..."
                sh '''
                    pwd
                    node -v
                    npm -v
                    rm -r node_modules
                    npm install
                    npm run build
                '''
                stash includes: 'build/**', name: 'my-build'
            }
        }
        stage ('Test') {
            steps {
                echo "Testing..."
                sh '''
                    pwd
                '''
            }
        }
        stage ('Stage') {
            steps {
                echo "Staging..."
                sh '''
                    ls -a
                '''
            }
        }
        stage ('Deliver') {
            steps {
                echo "Delivering..."
                unstash 'my-build'
                sh '''
                    ls -a
                    rm -r deployment-ready
                    mkdir deployment-ready
                    cp -r build/* deployment-ready
                    ls -a
                '''
            }
        }
    }
    post {
        success {
            emailtext (
                subject: "Success: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
                body: """<p>Success: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'</p>""",
                recepientProviders: [[$class: 'CulpritsRecepientProvider']]
            )
        }
    }
}