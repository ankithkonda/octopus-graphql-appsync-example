import { DefaultGuidedFailureModes, TenantedDeploymentModes } from '../../types/graphql-global-types';
import { Project_project, ProjectVariables } from '../../types/Project';

import axios from 'axios';

interface HandlerEvent {
  arguments: ProjectVariables;
}

export const handler = async (
  event: HandlerEvent
): Promise<Project_project | { data: any; errorMessage: string; errorType: string }> => {
  let response = null;

  try {
    response = await axios.get<RESTAPIProjectResponse>(
      `https://ankithtest.octopus.app/api/projects/${event.arguments.id}`,
      {
        headers: {
          'X-Octopus-ApiKey': process.env.API_KEY,
        },
      }
    );
    console.log('response', response);
  } catch (error) {
    console.log('error', error.response.data.ErrorMessage);
    // throw new Error(error.response.data.ErrorMessage);
    return { data: null, errorMessage: error.response.data.ErrorMessage, errorType: 'ERROR' };
  }

  const data = response.data;

  try {
    response = await axios.get(`https://ankithtest.octopus.app${data.Links.Logo}`, {
      headers: {
        'X-Octopus-ApiKey': process.env.API_KEY,
      },
    });
  } catch (error) {
    throw new Error(error.response.data.ErrorMessage).message;
  }

  const logoSVGString = response.data;

  try {
    response = await axios.get<RESTAPIVariables>(`https://ankithtest.octopus.app${data.Links.Variables}`, {
      headers: {
        'X-Octopus-ApiKey': process.env.API_KEY,
      },
    });
  } catch (error) {
    throw new Error(error.response.data.ErrorMessage).message;
  }

  const variables = response.data;

  return {
    Id: data.Id,
    Name: data.Name,
    Description: data.Description,
    VariableSetId: data.VariableSetId,
    DeploymentProcessId: data.DeploymentProcessId,
    ClonedFromProjectId: data.ClonedFromProjectId,
    DiscreteChannelRelease: data.DiscreteChannelRelease,
    IncludedLibraryVariableSetIds: data.IncludedLibraryVariableSetIds,
    DefaultToSkipIfAlreadyInstalled: data.DefaultToSkipIfAlreadyInstalled,
    TenantedDeploymentMode:
      data.TenantedDeploymentMode === RESTAPIProjectResponse_TenantedDeploymentModes.Untenanted
        ? TenantedDeploymentModes.UNTENANTED
        : TenantedDeploymentModes.SSH,
    DefaultGuidedFailureMode:
      data.DefaultGuidedFailureMode === RESTAPIProjectResponse_DefaultGuidedFailureModes.EnvironmentDefault
        ? DefaultGuidedFailureModes.ENVIRONMENT_DEFAULT
        : DefaultGuidedFailureModes.ENVIRONMENT_DEFAULT,
    VersioningStrategy: {
      Template: data.VersioningStrategy.Template,
      DonorPackage: data.VersioningStrategy.DonorPackage,
      DonorPackageStepId: null,
    },
    ReleaseCreationStrategy: {
      ChannelId: data.ReleaseCreationStrategy.ChannelId,
      ReleaseCreationPackage: data.ReleaseCreationStrategy.ReleaseCreationPackage,
    },
    Resources: {
      Logo: logoSVGString,
      Variables: {
        Version: variables.Version,
        Variables: [
          ...variables.Variables.map(variable => ({
            Id: variable.Id,
            Name: variable.Name,
            Value: variable.Value,
            Description: variable.Description,
            Scope: {
              Environment: [...variable.Scope.Environment],
            },
            IsEditable: variable.IsEditable,
            Type: variable.Type,
            IsSensitive: variable.IsSensitive,
          })),
        ],
      },
    },
  };
};

enum RESTAPIProjectResponse_TenantedDeploymentModes {
  Untenanted,
}

enum RESTAPIProjectResponse_DefaultGuidedFailureModes {
  EnvironmentDefault,
}

interface RESTAPIProjectResponse {
  Id: string;
  VariableSetId: string;
  DeploymentProcessId: string;
  ClonedFromProjectId: string;
  DiscreteChannelRelease: boolean;
  IncludedLibraryVariableSetIds: string[];
  DefaultToSkipIfAlreadyInstalled: false;
  TenantedDeploymentMode: RESTAPIProjectResponse_TenantedDeploymentModes;
  DefaultGuidedFailureMode: RESTAPIProjectResponse_DefaultGuidedFailureModes;
  VersioningStrategy: {
    Template: string;
    DonorPackage: {
      DeploymentAction: string;
      PackageReference: string;
    };
  };
  ReleaseCreationStrategy: {
    ChannelId: string;
    ReleaseCreationPackage: {
      DeploymentAction: string;
      PackageReference: string;
    };
  };
  Templates: [];
  AutoDeployReleaseOverrides: [];
  ReleaseNotesTemplate: null;
  SpaceId: string;
  ExtensionSettings: [];
  Name: string;
  Slug: string;
  Description: string;
  IsDisabled: boolean;
  ProjectGroupId: string;
  LifecycleId: string;
  AutoCreateRelease: false;
  ProjectConnectivityPolicy: {
    SkipMachineBehavior: string;
    TargetRoles: string[];
    AllowDeploymentsToNoTargets: boolean;
    ExcludeUnhealthyTargets: boolean;
  };
  Links: {
    Self: string;
    Releases: string;
    Channels: string;
    Triggers: string;
    ScheduledTriggers: string;
    OrderChannels: string;
    Variables: string;
    Progression: string;
    DeploymentProcess: string;
    Web: string;
    Logo: string;
    Metadata: string;
  };
}

interface RESTAPIVariables {
  Id: string;
  OwnerId: string;
  Version: number;
  Variables: [
    {
      Id: string;
      Name: string;
      Value: string;
      Description: string;
      Scope: {
        Environment: string[];
      };
      IsEditable: boolean;
      Type: string;
      IsSensitive: false;
    }
  ];
}
