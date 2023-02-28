import React from 'react';
// import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';
import { View } from '@twilio/flex-ui'
import CustomView from './CustomView';
import CustomSideBarButton from './CustomSidebarButton';
// import CustomTaskListContainer from './components/CustomTaskList/CustomTaskList.Container';
// import reducers, { namespace } from './states';

const PLUGIN_NAME = 'SamplePlugin';

export default class SamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  async init(flex, manager) {
    flex.SideNav.Content.add(
      <CustomSideBarButton key= "custom-view-button" />
  )

  flex.ViewCollection.Content.add(
      <View name="custom-view" key="cutom-view">
          <CustomView />
      </View>)
  
  }

}
