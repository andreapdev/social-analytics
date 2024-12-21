"use client"
import { Button, Fieldset, VStack, Input } from "@chakra-ui/react"
import { Field } from "@/components/chakra-ui/field"
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

import { addSocialMediaPost } from "@/app/infrastructure/interactions-repository"
import { useState } from "react"

const CreateForm = () => {
  function handleSubmit(event) {
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
    addSocialMediaPost(inputData);
  }

  function handleSelect(event) {
    const clickedName = event.target.value;
    const channelIdInput = document.querySelector('input[name=channelId]');
    //TODO: improve magic numbers
    const channelIdMap = {
      Instagram: 1,
      X: 2,
      TikTok: 3,
      Facebook: 4,
      Youtube: 5,
      LinkedIn: 6,
    };

    if (channelIdInput) {
      channelIdInput.value = channelIdMap[clickedName] || '';
    }
  }

  return (<>
    <DrawerRoot placement="left">
      <DrawerBackdrop />

      <DrawerTrigger asChild>
          <div className="fixed bottom-5 left-5 p-1 bg-white text-secondary rounded-full flex flex-col justify-center items-center shadow-lg shadow-slate-900 w-20 h-20 cursor-pointer">
            <i className="material-symbols-outlined text-3xl">add</i>
            <div className="text-xs">Add</div>
          </div>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerCloseTrigger />
        <form id="create-post" onSubmit={handleSubmit}>
          <Fieldset.Root size="lg" maxW="md">
          <VStack spacing={4} className='bg-secondary p-10'>
            <Fieldset.Legend>Create item</Fieldset.Legend>

            <Fieldset.Content>
              <Field orientation="horizontal" id="channelId" label="Channel" type="select" required>
                <NativeSelectRoot onChange={handleSelect}>
                  <NativeSelectField name="channelName" items={["Instagram", "X", "TikTok" , "Facebook", "Youtube", "LinkedIn",]} />
                </NativeSelectRoot>
              </Field>

              <Input name="channelId" type="hidden" />
              <Field orientation="horizontal" required label="Impressions">
                <Input name="impressionNumber" type="number" />
              </Field>
              <Field orientation="horizontal" required label="Comments">
                <Input name="commentNumber" type="number" />
              </Field>
              <Field orientation="horizontal" required label="Likes">
                <Input name="likeNumber" type="number" />
              </Field>
              <Field orientation="horizontal" required label="Shares">
                <Input name="shareNumber" type="number" />
              </Field>
              <Field orientation="horizontal" required label="Saved">
                <Input name="saveNumber" type="number" />
              </Field>
              <Field orientation="horizontal" required label="Follower impact">
                <Input name="followerImpact" type="number" />
              </Field>
              <Field orientation="horizontal" required label="Clicks">
                <Input name="clickNumber" type="number" />
              </Field>
            </Fieldset.Content>
            
            <Button colorScheme="grey" type="submit">
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