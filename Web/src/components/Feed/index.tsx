import { Container } from "../Header/styles";



function Feed ({ raffles }) {
    return (
        <Container>
            {raffles.map((raffle, index) => (
                <RaffleCard key={index} raffle={raffle}>

                </RaffleCard>
            ))}
        </Container>
    )
}