namespace Libplanet.Net.Consensus
{
    public enum RoundStep : byte
    {
        RoundStepNewRound = 0x00,

        RoundStepPropose = 0x01,

        RoundStepPrevote = 0x02,

        RoundStepPrevoteWait = 0x03,

        RoundStepPreCommit = 0x04,

        RoundStepPreCommitWait = 0x05,

        RoundStepCommit = 0x06
    }
}

