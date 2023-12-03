import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Configuration, OpenAIApi } from "openai";

const OpenAIApi = () => {
      
  useEffect(async () => {
    const configuration = new Configuration({
      organization: "org-OGqKgXsyt216Qu2rm3igXL0y",
      apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.listEngines();
    console.log("OpenAIApi ->",response.data);
    return () => {}
  }, []);
  
  return (
    <View>
      <Text>OpenAIApi</Text>
    </View>
  )
}

export default OpenAIApi