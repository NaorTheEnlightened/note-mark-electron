function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="flex h-full items-center justify-center">
        <div className="text-4xl text-blue-500">Hello from Electron!</div>
      </div>
    </>
  )
}

export default App
