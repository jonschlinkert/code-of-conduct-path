'use strict';

require('mocha');
var assert = require('assert');
var path = require('path');
var coc = require('..');
var fixtures = path.join.bind(path, __dirname, 'fixtures');
var name = path.basename;

describe('code-of-conduct', function() {
  it('should return an empty array when a file does not exist', function() {
    assert.equal(coc(fixtures('none')), undefined);
  });

  it('should get coc', function() {
    assert.equal(name(coc(fixtures('coc'))), 'coc');
  });

  it('should get coc.md', function() {
    assert.equal(name(coc(fixtures('coc-md'))), 'coc.md');
  });

  it('should get code-of-conduct', function() {
    assert.equal(name(coc(fixtures('code-of-conduct'))), 'code-of-conduct');
  });

  it('should get code-of-conduct.md', function() {
    assert.equal(name(coc(fixtures('code-of-conduct-md'))), 'code-of-conduct.md');
  });

  it('should get code_of_conduct', function() {
    assert.equal(name(coc(fixtures('code_of_conduct'))), 'code_of_conduct');
  });

  it('should get code_of_conduct.md', function() {
    assert.equal(name(coc(fixtures('code_of_conduct_md'))), 'code_of_conduct.md');
  });

  it('should get contributor-covenent', function() {
    assert.equal(name(coc(fixtures('contributor-covenent'))), 'contributor-covenent');
  });

  it('should get contributor-covenent.md', function() {
    assert.equal(name(coc(fixtures('contributor-covenent-md'))), 'contributor-covenent.md');
  });

  it('should get contributor_covenent', function() {
    assert.equal(name(coc(fixtures('contributor_covenent'))), 'contributor_covenent');
  });

  it('should get contributor_covenent.md', function() {
    assert.equal(name(coc(fixtures('contributor_covenent_md'))), 'contributor_covenent.md');
  });
});
