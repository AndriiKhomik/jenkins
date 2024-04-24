pipeline {
    agent {
        docker {image 'node:20.11.1-alpine3.19'}
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
                    npm run build
                '''
                archiveArtifacts artifacts: '**/*', allowEmptyArchive: true
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
                copyArtifacts(projectName: 'Build', selector: lastSuccessful(), filter: '**/*')
                sh '''
                    ls -a
                    cp build build-new
                    ls -a
                '''
            }
        }
    }
}