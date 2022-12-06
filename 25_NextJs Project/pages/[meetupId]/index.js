import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
    return (
        <MeetupDetail 
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
            title="First Meetup"
            address="Some Street 5, Some City"
            description="The first Meetup"
        />
    );
};

export const getStaticPaths = async () => {

    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://christopher_rand_2001:88mma71azh@cluster0.j3rvpej.mongodb.net/meetups?retryWrites=true&w=majority');
    
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArrary();

    const selectedMeetup = meetupsCollection.findOne({_id: meetupId});

    client.close();

    return {
        fallback: false,
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
        })),
    };
}

export const getStaticProps = async (context) => {

    const meetupId = context.params.meetupId;

    return {
        props: {
            meetupData: selectedMeetup,
        }
    }
}

export default MeetupDetails;