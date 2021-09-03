import { all } from "@redux-saga/core/effects";
import { watchPostAnnouncements, watchUpdateAnnouncement } from "./announcement";
import { watchGetComments, watchPostComments } from "./comment";
import { watchPostEvents } from "./event";
import { watchDeletePosts, watchGetPosts } from "./post";
import { watchGetPostById } from "./postById";
import { watchRegister, watchLogin, watchLogout, watchGetUser, watchUserUpdate } from "./user";
import { watchPutLikes } from "./like";
import {watchSearchFunction} from "./search"

export default function* rootSaga() {
  yield all([
    watchRegister(),
    watchLogin(),
    watchLogout(),
    watchGetUser(),
    watchUserUpdate(),
    watchGetPosts(),
    watchPostEvents(),
    watchPostAnnouncements(),
    watchGetComments(),
    watchPostComments(),
    watchGetPostById(),
    watchPutLikes(),
    watchDeletePosts(),
    watchUpdateAnnouncement(),
    watchSearchFunction(),

  ]);
}
