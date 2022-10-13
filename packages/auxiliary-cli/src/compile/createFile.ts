const createFile = (mode: string) => {
  console.log(mode)
}

export const commandConfig = {
  description: '创建通用命令配置文件，可通过此文件自定义命令然后再执行',
  perform: (mode: string) => {
    createFile(mode)
  }
}