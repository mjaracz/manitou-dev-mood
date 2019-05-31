export interface StoryState {
    stories: Story[],
    isLoading: boolean,
    error: null | Error
}

export type Story = {
  id: string,
  title: string,
  author: string,
  body: string
}