pipeline {
    agent any

    tools {
        allure 'ALLURE_HOME' 
    }

    environment {
        // Inject the environment variable natively into the Jenkins process
        ENV = 'qa'
        PLAYWRIGHT_BROWSERS_PATH = "${WORKSPACE}\\pw-browsers"
        TEMP = "${WORKSPACE}\\tmp"
        TMP  = "${WORKSPACE}\\tmp"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'practice', url: 'https://github.com/bkp14/playwright_work.git'
            }
        }

        stage('Node Version') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install' 
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install chromium firefox'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Keep the execution command simple and clean
                bat 'npx playwright test --project=chromium'
            }
        }
    }

    post {
        always {
            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])

            allure(
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            )
        }
    }
}