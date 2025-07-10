const core = require('@actions/core');

try {
  const name = core.getInput('name');

  if (!name.match(/^[A-Za-z]+$/)) {
    core.setFailed(`Invalid name: ${name}`);
  } else {
    console.log(`Hello, ${name}! 👋`);
  }
} catch (error) {
  core.setFailed(error.message);
}
