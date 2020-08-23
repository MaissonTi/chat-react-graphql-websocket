import React, { useState, useMemo } from 'react';
import {
  Message,
  MessageDiv,
  Avatar,
  Context,
  TextContext,
  TitleContext,
  Hour,
  DayWeek,
} from './styles';

import userImg from '~/assests/user.png';

import { getTime, getDateWeekName, isEquableDate } from '~/util';

export default function MessageChat({ data, me, dataOld }) {
  const [active] = useState(me);

  const hour = useMemo(() => getTime(data.createdAt), [data]);

  const day = useMemo(() => {
    if (!dataOld) return true;

    return isEquableDate(dataOld.createdAt, data.createdAt);
  }, [dataOld, data]);

  const ant = useMemo(() => {
    if (!dataOld) return true;

    return dataOld.user.name !== data.user.name;
  }, [dataOld, data]);

  return (
    <>
      {day && (
        <DayWeek>
          <div> {getDateWeekName(data.createdAt)} </div>
        </DayWeek>
      )}
      <Message me={active} ant={ant}>
        {ant && (
          <Avatar
            src={
              (data.user && data.user.file && data.user.file.path) || userImg
            }
          />
        )}

        <MessageDiv>
          <div>
            <Context me={active} ant={ant}>
              {/* <TitleContext me={active}> {data.user.name} </TitleContext> */}
              <TextContext>{data.text}</TextContext>
              <Hour me={active}> {hour} </Hour>
            </Context>
          </div>
        </MessageDiv>
      </Message>
    </>
  );
}
