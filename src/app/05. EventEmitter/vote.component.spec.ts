import { VoteComponent } from "./vote.component";

describe("EventEmitter: VoteComponent", () => {
    let component: VoteComponent;
    beforeEach(() => {
        component = new VoteComponent();
    });

    it('should raised voteChanged when upvoted', () => {
        let totalVotes = null;
        component.voteChanged.subscribe(tv => totalVotes = tv);
        component.upVote();
        expect(totalVotes).not.toBeNull();
        expect(totalVotes).toBe(1);
    });

    it('should raised voteChanged when downvoted', () => {
        let totalVotes = null;
        component.voteChanged.subscribe(tv => totalVotes = tv);
        component.downVote();
        expect(totalVotes).not.toBeNull();
        expect(totalVotes).toBe(-1);
    });
});
