// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostStatus = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE"
};

const { Task, Note, Post, Icecream, User } = initSchema(schema);

export {
  Task,
  Note,
  Post,
  Icecream,
  User,
  PostStatus
};