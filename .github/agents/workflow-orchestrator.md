# Agent Workflow Orchestrator

This document describes how to chain the custom agents together to create a complete development workflow.

## Workflow Overview

The agent workflow follows this sequence:

```
[Task Request] → develop-agent → test-agent → document-agent → review-agent → [Complete/Restart]
```

## Agent Chain Description

### 1. Develop Agent (develop-agent.md)
**Input**: Feature request or task description
**Output**: Implemented code and list of changes
**Next**: test-agent

### 2. Test Agent (test-agent.md)
**Input**: Code from develop-agent
**Output**: Test results and validation report
**Next**: document-agent

### 3. Document Agent (document-agent.md)
**Input**: Code and test results
**Output**: Updated documentation
**Next**: review-agent

### 4. Review Agent (review-agent.md)
**Input**: All artifacts from previous agents
**Output**: Final approval or change requests
**Next**: Complete or restart from develop-agent

## How to Use the Workflow

### Method 1: Sequential Agent Invocation
Call each agent in sequence, passing context from previous agents:

1. **Start with develop-agent**:
   ```
   Task: [Your feature request]
   Context: Starting new workflow
   ```

2. **Invoke test-agent**:
   ```
   Task: Test the implementation
   Context: [Summary from develop-agent]
   ```

3. **Invoke document-agent**:
   ```
   Task: Document the feature
   Context: [Summaries from develop-agent and test-agent]
   ```

4. **Invoke review-agent**:
   ```
   Task: Review all work
   Context: [Summaries from all previous agents]
   ```

### Method 2: Automated Workflow Script
Use the provided workflow script to automatically chain agents:

```bash
./workflow-runner.sh "Implement feature X"
```

## Workflow States

### Success Path
```
develop → test → document → review → APPROVED → COMPLETE
```

### Iteration Path
```
develop → test → document → review → CHANGES REQUESTED → develop (with feedback)
```

## Context Passing

Each agent should receive:
- **Task**: What they need to accomplish
- **Previous Context**: Summary from previous agents
- **Artifacts**: Relevant files, code, or results

Format for context passing:
```
## Previous Agent Output
[Summary from previous agent]

## Artifacts
- File: path/to/file.ext
- Changes: description of changes
- Results: test results or other outputs

## Your Task
[Specific instructions for current agent]
```

## Best Practices

1. **Clear Communication**: Each agent should provide clear output for the next agent
2. **Independent Operation**: Agents should work independently without assuming previous agent's perspective
3. **Comprehensive Output**: Include all relevant information in handoff
4. **Iteration Ready**: Support workflow restarts based on review feedback

## Example Workflow Session

See `workflow-example.md` for a complete example of the workflow in action.

## Future Enhancements

- Automated agent chaining via CI/CD
- Workflow state persistence
- Metrics and analytics collection
- Parallel agent execution for independent tasks
- Custom workflow branching logic
