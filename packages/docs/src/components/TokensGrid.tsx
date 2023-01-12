import '../styles/tokens-grid.css'

type TokensGridProps = {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  function convertRemToPixels(value: string) {
    return `${Number(value.replace('rem', '')) * 16}px`
  }

  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && <td>{convertRemToPixels(value)}</td>}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
