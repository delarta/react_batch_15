import { JitsiMeeting } from "@jitsi/web-sdk";
import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";

const MeetingRoom = () => {
  const params = useParams()
  const apiRefNew = useRef();
  const [logItems, updateLog] = useState([]);
  const [knockingParticipants, updateKnockingParticipants] = useState([]);

  const printEventOutput = (payload) => {
    updateLog((items) => [...items, JSON.stringify(payload)]);
  };

  const handleAudioStatusChange = (payload, feature) => {
    if (payload.muted) {
      updateLog((items) => [...items, `${feature} off`]);
    } else {
      updateLog((items) => [...items, `${feature} on`]);
    }
  };

  const handleChatUpdates = (payload, ref) => {
    if (payload.isOpen || !payload.unreadCount) {
      return;
    }
    ref.current.executeCommand("toggleChat");
    updateLog((items) => [
      ...items,
      `you have ${payload.unreadCount} unread messages`,
    ]);
  };

  const handleKnockingParticipant = (payload) => {
    updateLog((items) => [...items, JSON.stringify(payload)]);
    updateKnockingParticipants((participants) => [
      ...participants,
      payload?.participant,
    ]);
  };

  const handleJitsiIFrameRef1 = (iframeRef) => {
    iframeRef.style.background = "cadetblue";
    iframeRef.style.height = "100vh";
  };

  const handleApiReady = (apiObj, ref) => {
    ref.current = apiObj;
    ref.current.addEventListeners({
      // Listening to events from the external API
      audioMuteStatusChanged: (payload) =>
        handleAudioStatusChange(payload, "audio"),
      videoMuteStatusChanged: (payload) =>
        handleAudioStatusChange(payload, "video"),
      raiseHandUpdated: printEventOutput,
      tileViewChanged: printEventOutput,
      chatUpdated: (payload) => handleChatUpdates(payload, ref),
      knockingParticipant: handleKnockingParticipant,
    });
  };

  console.log(params)

  return (
    <JitsiMeeting
      getIFrameRef={handleJitsiIFrameRef1}
      domain="meet.jit.si"
      roomName={params.roomName}
      onApiReady={(externalApi) => handleApiReady(externalApi, apiRefNew)}
    />
  );
};

export default MeetingRoom;
