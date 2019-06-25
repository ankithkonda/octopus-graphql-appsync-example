export const handler = async (event: any) => {
  return {
    Id: 'Projects-1' + event.arguments.id,
    VariableSetId: 'variableset-Projects-1',
    DeploymentProcessId: 'deploymentprocess-Projects-1',
    ClonedFromProjectId: null,
    DiscreteChannelRelease: false,
    IncludedLibraryVariableSetIds: [],
    DefaultToSkipIfAlreadyInstalled: false,
    TenantedDeploymentMode: 'Untenanted'.toUpperCase(),
    DefaultGuidedFailureMode: 'EnvironmentDefault' ? 'ENVRIONMENT_DEFAULT' : null,
    VersioningStrategy: {
      Template: '#{Octopus.Version.LastMajor}.#{Octopus.Version.LastMinor}.#{Octopus.Version.NextPatch}',
      DonorPackage: null,
      DonorPackageStepId: null,
    },
    ReleaseCreationStrategy: {
      ChannelId: null,
      ReleaseCreationPackage: null,
      ReleaseCreationPackageStepId: null,
    },
    Resources: {
      Logo: 'url-to-logo',
      Variables: {
        Version: 1,
        Variables: [
          {
            Id: 'e34009ab-11a1-f328-4cc3-e5568067601b',
            Name: 'VariableA',
            Value: 'value_of_variable_a',
            Description: null,
            Scope: {
              Environment: ['Environments-1'],
            },
            IsEditable: true,
            Prompt: null,
            Type: 'String',
            IsSensitive: false,
          },
        ],
      },
    },
  };
};
