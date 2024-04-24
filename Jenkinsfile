pipeline {
    agent {
        docker {image 'coexcz/node-alpine:v16.14.2'}
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
                    mkdir ~/.npm-global
                    npm config set prefix '~/.npm-global'
                    export PATH=~/.npm-global/bin:$PATH
                    source ~/.profile
                    npm install -g jshint
                    npm install
                '''
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
                sh '''
                    ls -a
                '''
            }
        }
    }
}