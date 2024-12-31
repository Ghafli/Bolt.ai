// backend/services/gitService.js
const NodeGit = require('nodegit');

const commitCode = async (repoPath, code) => {
  const repo = await NodeGit.Repository.open(repoPath);
  const oid = await NodeGit.Index.addByPath(repo, 'code.js');
  await NodeGit.Commit.create(repo, 'HEAD', 'Generated code', oid);
};

module.exports = { commitCode };
