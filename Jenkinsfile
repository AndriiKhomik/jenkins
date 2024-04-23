pipeline {
    agent any
    triggers {
        pollSCM '* * * * *'
    }
    stages {
        stage ('Build') {
            steps {
                echo "Building..."
                sh '''
                    cd jenkins
                    npm run build
                '''
            }
        }
        stage ('Test') {
            steps {
                echo "Testing..."
                sh '''
                    cd jenkins
                    pwd
                '''
            }
        }
        stage ('Stage') {
            steps {
                echo "Staging..."
                sh '''
                    cd jenkins
                    ls -a
                '''
            }
        }
        stage ('Deliver') {
            steps {
                echo "Delivering..."
                sh '''
                    cd jenkins
                    ll
                '''
            }
        }
    }
}