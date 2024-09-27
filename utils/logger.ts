export interface LoggerInterface {
  responseTime: number;
  status: number;
  statusText: string;
  message: string;
}
/**
 * Read log from API fetch
 * @param label
 * @param logs
 * @returns
 */
export const Logger = (label: string, logs: LoggerInterface) => {
  if (process.env.NODE_ENV === "production") return;
  console.group(label);
  console.table(logs);
  console.groupEnd();
};
