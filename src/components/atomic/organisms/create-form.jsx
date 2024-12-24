"use client"
import { useState } from "react";
import { Button, Fieldset, VStack, Input, Text } from "@chakra-ui/react"
import { Field } from "@/components/chakra-ui/field"
import { addSocialMediaPost } from "@/app/infrastructure/interactions-repository"
import { getChannelInfo } from "@/app/infrastructure/interactions-repository"

import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/chakra-ui/native-select"

import {
  DrawerBackdrop,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/chakra-ui/drawer"

const CreateForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
  
    const inputData = {
      channelName: formData.get("channelName"),
      channelId: parseInt(formData.get("channelId"), 10),
      impressionNumber: parseInt(formData.get("impressionNumber"), 10),
      commentNumber: parseInt(formData.get("commentNumber"), 10),
      likeNumber: parseInt(formData.get("likeNumber"), 10),
      shareNumber: parseInt(formData.get("shareNumber"), 10),
      saveNumber: parseInt(formData.get("saveNumber"), 10),
      followerImpact: parseInt(formData.get("followerImpact"), 10),
      clickNumber: parseInt(formData.get("clickNumber"), 10),
    };
    const isResponseOk = await addSocialMediaPost(inputData);
    
    if (isResponseOk) {
      setSuccessMessage("Item successfully created!");
      setErrorMessage("");
      event.target.reset();
    } else {
      setErrorMessage("Something went wrong. Please try again.");
      setSuccessMessage("");
    }
  }

  function handleSelect(event) {
    const clickedName = event.target.value;
    const channelIdInput = document.querySelector('input[name=channelId]');

    if (channelIdInput) {
      const channelId = Object.keys(getChannelInfo()).find(
        (id) => getChannelInfo()[id].name === clickedName
      );
  
      channelIdInput.value = channelId || '';
    }
  }
  return (<>
    <DrawerRoot placement="left">
      <DrawerBackdrop />

      <DrawerTrigger asChild>
          <div className="p-1 bg-white text-secondary rounded-full flex flex-col justify-center items-center shadow-lg shadow-slate-900 w-16 h-16 cursor-pointer">
            <i className="material-symbols-outlined text-3xl">add</i>
            <div className="text-xs">Add</div>
          </div>
      </DrawerTrigger>

      <DrawerContent className="overflow-auto">
        <DrawerCloseTrigger />
        <form id="create-post" onSubmit={handleSubmit}>
          <Fieldset.Root size="lg" maxW="md">
          <VStack spacing={4} className='bg-secondary p-10 min-h-screen'>
            <Fieldset.Legend>Create item</Fieldset.Legend>

            <Fieldset.Content>
              <Field orientation="horizontal" id="channelId" label="Channel" type="select" required>
                <NativeSelectRoot onChange={handleSelect}>
                  <NativeSelectField className="p-2 bg-white/5" name="channelName" items={Object.values(getChannelInfo()).map(channel => channel.name)}  />
                </NativeSelectRoot>
              </Field>

              <Input name="channelId" type="hidden" />
              <Field orientation="horizontal" required label="Impressions">
                <Input name="impressionNumber" type="number" className="p-2 bg-white/5" />
              </Field>
              <Field orientation="horizontal" required label="Comments">
                <Input name="commentNumber" type="number" className="p-2 bg-white/5" />
              </Field>
              <Field orientation="horizontal" required label="Likes">
                <Input name="likeNumber" type="number" className="p-2 bg-white/5" />
              </Field>
              <Field orientation="horizontal" required label="Shares">
                <Input name="shareNumber" type="number" className="p-2 bg-white/5" />
              </Field>
              <Field orientation="horizontal" required label="Saved">
                <Input name="saveNumber" type="number" className="p-2 bg-white/5" />
              </Field>
              <Field orientation="horizontal" required label="Follower impact">
                <Input name="followerImpact" type="number" className="p-2 bg-white/5" />
              </Field>
              <Field orientation="horizontal" required label="Clicks">
                <Input name="clickNumber" type="number" className="p-2 bg-white/5" />
              </Field>
            </Fieldset.Content>

            {successMessage && (
              <Text className="font-bold text-green-500">
                {successMessage}
              </Text>
            )}

            {errorMessage && (
              <Text className="font-bold text-red-600">
                {errorMessage}
              </Text>
            )}
            
            <Button type="submit" className="p-4 bg-white text-black shadow-md shadow-black hover:shadow-none hover:opacity-60 my-4">
              Submit
            </Button>
          </VStack>
          </Fieldset.Root>
        </form>
      </DrawerContent>
    </DrawerRoot>
    </>);
};

export default CreateForm;