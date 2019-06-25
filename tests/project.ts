import { gql } from 'apollo-boost';

const ProjectQuery = gql`
  query Project($id: ID!) {
    project(id: $id) {
      Id
      Name
      Description
      VariableSetId
      DeploymentProcessId
      ClonedFromProjectId
      DiscreteChannelRelease
      IncludedLibraryVariableSetIds
      DefaultToSkipIfAlreadyInstalled
      TenantedDeploymentMode
      DefaultGuidedFailureMode
      VersioningStrategy {
        Template
        DonorPackage {
          DeploymentAction
          PackageReference
        }
        DonorPackageStepId
      }
      ReleaseCreationStrategy {
        ChannelId
        ReleaseCreationPackage {
          DeploymentAction
          PackageReference
        }
      }
      Resources {
        Logo
        Variables {
          Version
          Variables {
            Id
            Name
            Value
            Description
            Scope {
              Environment
            }
            IsEditable
            Type
            IsSensitive
          }
        }
      }
    }
  }
`;
