import { useQuery } from '@tanstack/vue-query'

export default function useOpenAI(personalityQuery: string) {
    const config = useRuntimeConfig();

    return useQuery({
        queryKey: ['openai', personalityQuery],
        queryFn: async () => {
            debugger
            const response = await fetch(`${config.public.apiParty.endpoints.openai}/completions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.public.apiParty.endpoints.openai}`
                },
                body: JSON.stringify({
                    model: "text-davinci-003",
                    prompt: `Analyze the following list of Pokémon and provide insights about the user's personality: ${personalityQuery}`,
                    max_tokens: 150
                })
            })

            if (!response.ok) {
                throw new Error('Failed to fetch OpenAI insights')
            }

            const data = await response.json()
            return data.choices[0].text
        }
    })
}
