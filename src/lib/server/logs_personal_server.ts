import pool from "src/lib/server/db";
import type { RowDataPacket } from "mysql2";
import type { PostModel } from "src/lib/models/post-model";
import getRandomColor from "./random_colors";

export default async function getPersonalLogs() {
  try {
    const [rows] = await pool.query<RowDataPacket[] & PostModel[]>(
      "SELECT * FROM post ORDER BY date_post DESC LIMIT 15",
    );
    return rows.map((i) => ({
      id: i.id_post,
      title: i.title_post,
      content: i.content_post,
      date: new Date(i.date_post).toISOString().split("T")[0],
      color: () => getRandomColor()
    }));
  } catch (error) {
    throw new Error("Failed to fetch personal logs");
  }
}
