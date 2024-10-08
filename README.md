# Guess the coverage

## What is Coverage?

Code coverage is a measure used to describe the degree to which the source code of a program is tested by a particular test suite. It provides insights into which parts of the code are being executed during testing and which parts are not. Higher coverage percentages generally indicate that more of the code is being tested, which can lead to higher code quality and fewer bugs.

### Types of Coverage:
- **Statement Coverage**: Ensures that each statement in the code has been executed at least once.
- **Branch Coverage**: Ensures that each branch (e.g., `if` and `else` blocks) has been executed.
- **Function Coverage**: Ensures that each function or method has been called.
- **Line Coverage**: Ensures that each line of code has been executed.

## Sonar

SonarQube (or SonarCloud for the cloud-based version) is a tool used for continuous inspection of code quality. It performs automatic reviews with static analysis of code to detect bugs, code smells, and security vulnerabilities. It also provides detailed reports on code coverage and other metrics.

### Key Features:
- **Static Code Analysis**: Detects potential issues in the code without executing it.
- **Code Quality Metrics**: Provides metrics such as code complexity, duplication, and coverage.
- **Continuous Integration**: Integrates with CI/CD pipelines to ensure code quality is maintained over time.
- **Multi-Language Support**: Supports a wide range of programming languages.

### Sonar Coverage

SonarQube/SonarCloud provides detailed coverage reports that help developers understand the extent of their test coverage. It integrates with various testing frameworks and CI/CD pipelines to provide real-time feedback on code quality. **One of the key features of SonarQube/SonarCloud is its ability to specifically check the coverage for new code**, ensuring that any newly added code meets the required coverage standards. This helps maintain high code quality and prevents the introduction of untested code into the codebase.

## Guess the coverage game

The "Guess the Coverage" game is designed to engage participants in understanding and improving code coverage through a collaborative and interactive coding exercise. Here's how the game works:

Step 1: Coding Challenge
Participants will each create a new branch in the repository. In their respective branches, they will add new features, such as a function or a component, and write tests for the new code.

Step 2: Coverage Guessing Game
After writing the tests, participants will upload their code to their respective branches. The facilitator will then show the code and tests to all participants. The other participants will guess the coverage percentage for the new code.
