/**
 * @fileoverview Mongoose schema for the 'ifrsFullSchema' subdocument
 * @exports mongoose.model
 * @author Sam McRuvie
 */
// ----Mongoose package/imports
import mongoose from 'mongoose'

/**
 * @class recordSchemaSchema
 * @description Mongoose schema for 'ifrsFullSchema' subdocument
 * @type mongoose.Schema
 */

const ifrsFullSchema = new mongoose.Schema({
    "Accruals": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AccumulatedOtherComprehensiveIncome": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AdditionsOtherThanThroughBusinessCombinationsPropertyPlantAndEquipment": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AdditionsToRightofuseAssets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AdjustedWeightedAverageShares": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AdjustmentsForDecreaseIncreaseInInventories": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AdjustmentsForDecreaseIncreaseInOtherOperatingReceivables": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AdjustmentsForDecreaseIncreaseInTradeAccountReceivable": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AdjustmentsForDepreciationAndAmortisationExpense": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AdjustmentsForImpairmentLossReversalOfImpairmentLossRecognisedInProfitOrLoss": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AdjustmentsForIncomeTaxExpense": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AdjustmentsForIncreaseDecreaseInTradeAccountPayable": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AdjustmentsForLossesGainsOnDisposalOfNoncurrentAssets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AdjustmentsForProvisions": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AdjustmentsForSharebasedPayments": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AdjustmentsForUnrealisedForeignExchangeLossesGains": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ApplicableTaxRate": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "Assets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "BankBorrowingsUndiscountedCashFlows": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "BasicEarningsLossPerShare": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "BorrowingCostsCapitalised": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CapitalCommitments": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CapitalisationRateOfBorrowingCostsEligibleForCapitalisation": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CashAndCashEquivalents": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CashFlowsFromUsedInDecreaseIncreaseInRestrictedCashAndCashEquivalents": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CashFlowsFromUsedInDecreaseIncreaseInShorttermDepositsAndInvestments": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CashFlowsFromUsedInFinancingActivities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CashFlowsFromUsedInInvestingActivities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CashFlowsFromUsedInOperatingActivities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CashFlowsUsedInObtainingControlOfSubsidiariesOrOtherBusinessesClassifiedAsInvestingActivities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CashOutflowForLeases": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ComprehensiveIncome": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CostOfSales": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CumulativeGainLossOnDisposalOfInvestmentsInEquityInstrumentsDesignatedAsMeasuredAtFairValueThroughOtherComprehensiveIncome": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CurrentAssets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CurrentDerivativeFinancialAssets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CurrentDerivativeFinancialLiabilities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CurrentFinanceLeaseLiabilities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CurrentFinancialAssetsAvailableforsale": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CurrentInterestPayable": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CurrentInvestments": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CurrentLeaseLiabilities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CurrentLiabilities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CurrentOreStockpiles": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CurrentPortionOfLongtermBorrowings": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CurrentPrepaidExpenses": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CurrentRestrictedCashAndCashEquivalents": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CurrentTaxAssetsCurrent": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CurrentTaxExpenseIncome": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CurrentTaxLiabilitiesCurrent": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CurrentTradeReceivables": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredTaxExpenseIncomeRecognisedInProfitOrLoss": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredTaxExpenseIncomeRelatingToOriginationAndReversalOfTemporaryDifferences": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredTaxLiabilityAsset": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DepreciationRightofuseAssets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DilutedEarningsLossPerShare": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DilutiveEffectOfShareOptionsOnNumberOfOrdinaryShares": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DisposalsPropertyPlantAndEquipment": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DividendsPaidClassifiedAsFinancingActivities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DividendsPaidOrdinaryShares": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DividendsPaidOrdinarySharesPerShare": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DividendsProposedOrDeclaredBeforeFinancialStatementsAuthorisedForIssueButNotRecognisedAsDistributionToOwners": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DividendsProposedOrDeclaredBeforeFinancialStatementsAuthorisedForIssueButNotRecognisedAsDistributionToOwnersPerShare": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EffectOfExchangeRateChangesOnCashAndCashEquivalents": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EmployeeBenefitsExpense": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "Equity": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EquityAndLiabilities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EstimateOfContributionsExpectedToBePaidToPlan": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ExpenseArisingFromExplorationForAndEvaluationOfMineralResources": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ExpenseRelatingToLeasesOfLowvalueAssetsForWhichRecognitionExemptionHasBeenUsed": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ExpenseRelatingToShorttermLeasesForWhichRecognitionExemptionHasBeenUsed": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ExpenseRelatingToVariableLeasePaymentsNotIncludedInMeasurementOfLeaseLiabilities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FairValueOfInvestmentsInEquityInstrumentsDesignatedAsMeasuredAtFairValueThroughOtherComprehensiveIncome": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FairValueOfInvestmentsInEquityInstrumentsMeasuredAtFairValueThroughOtherComprehensiveIncomeAtDateOfDerecognition": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FinanceCosts": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FinancialAssetsAtFairValueThroughProfitOrLoss": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FinishedGoods": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FutureFinanceChargeOnFinanceLease": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GainLossOnDesignationOfFinancialInstrumentAsMeasuredAtFairValueThroughProfitOrLossBecauseCreditDerivativeIsUsedToManageCreditRisk": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GainsLossesOnAvailableforsaleFinancialAssets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GainsLossesOnCashFlowHedgesBeforeTax": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GainsLossesOnCashFlowHedgesNetOfTax": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GainsLossesOnChangeInFairValueOfDerivatives": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GainsLossesOnDisposalsOfPropertyPlantAndEquipment": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GainsLossesOnExchangeDifferencesOnTranslationRecognisedInProfitOrLoss": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GainsLossesOnFinancialAssetsMeasuredAtFairValueThroughOtherComprehensiveIncomeBeforeTax": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GainsLossesOnRemeasuringAvailableforsaleFinancialAssetsBeforeTax": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "Goodwill": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ImpairmentLossImpairmentGainAndReversalOfImpairmentLossDeterminedInAccordanceWithIFRS9": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ImpairmentLossOnFinancialAssets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ImpairmentLossRecognisedInProfitOrLoss": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ImpairmentLossRecognisedInProfitOrLossPropertyPlantAndEquipment": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ImpairmentLossReversalOfImpairmentLossRecognisedInProfitOrLoss": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeTaxExpenseContinuingOperations": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeTaxRelatingToAvailableforsaleFinancialAssetsOfOtherComprehensiveIncome": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeTaxRelatingToComponentsOfOtherComprehensiveIncome": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeTaxRelatingToComponentsOfOtherComprehensiveIncomeThatWillBeReclassifiedToProfitOrLoss": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeTaxRelatingToFinancialAssetsMeasuredAtFairValueThroughOtherComprehensiveIncome": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeTaxRelatingToInvestmentsInEquityInstrumentsOfOtherComprehensiveIncome": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeTaxRelatingToRemeasurementsOfDefinedBenefitPlansOfOtherComprehensiveIncome": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncreaseDecreaseInCashAndCashEquivalents": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncreaseDecreaseInDefinedBenefitObligationDueToReasonablyPossibleDecreaseInActuarialAssumption": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncreaseDecreaseInDefinedBenefitObligationDueToReasonablyPossibleIncreaseInActuarialAssumption": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncreaseDecreaseThroughEffectOfChangesInForeignExchangeRatesLiabilitiesArisingFromFinancingActivities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncreaseDecreaseThroughExerciseOfOptions": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncreaseDecreaseThroughFinancingCashFlowsLiabilitiesArisingFromFinancingActivities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncreaseDecreaseThroughOtherChangesLiabilitiesArisingFromFinancingActivities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "InterestExpenseOnBorrowings": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "InterestExpenseOnLeaseLiabilities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "Inventories": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "InventoriesTotal": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "InventoryWritedown2011": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IssuedCapital": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IssueOfEquity": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "KeyManagementPersonnelCompensation": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "KeyManagementPersonnelCompensationPostemploymentBenefits": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "KeyManagementPersonnelCompensationSharebasedPayment": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "KeyManagementPersonnelCompensationShorttermEmployeeBenefits": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LeaseAndSubleasePaymentsRecognisedAsExpense": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LeaseLiabilities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "Liabilities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LiabilitiesArisingFromFinancingActivities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LiabilityAssetOfDefinedBenefitPlans": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LongtermBorrowings": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "MinimumFinanceLeasePaymentsPayable": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "MinimumFinanceLeasePaymentsPayableAtPresentValue": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "MinimumLeasePaymentsPayableUnderNoncancellableOperatingLease": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "MiscellaneousOtherOperatingIncome": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NoncurrentAssets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NoncurrentFinanceLeaseLiabilities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NoncurrentInvestmentsOtherThanInvestmentsAccountedForUsingEquityMethod": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NoncurrentLeaseLiabilities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NoncurrentLoansAndReceivables": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NoncurrentOreStockpiles": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NoncurrentRestrictedCashAndCashEquivalents": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NumberOfSharesIssued": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherAdjustmentsForNoncashItems": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncome": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeBeforeTaxGainsLossesOnRemeasurementsOfDefinedBenefitPlans": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeNetOfTaxAvailableforsaleFinancialAssets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeNetOfTaxCashFlowHedges": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeNetOfTaxGainsLossesFromInvestmentsInEquityInstruments": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeNetOfTaxGainsLossesOnRemeasurementsOfDefinedBenefitPlans": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeThatWillBeReclassifiedToProfitOrLossNetOfTax": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeThatWillNotBeReclassifiedToProfitOrLossNetOfTax": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherCurrentAssets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherIncome": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherLongtermProvisions": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherNoncurrentAssets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherNoncurrentLiabilities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherNoncurrentReceivables": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherOperatingIncomeExpense": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherPayables": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherReserves": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherShorttermProvisions": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ParValuePerShare": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PaymentsOfFinanceLeaseLiabilitiesClassifiedAsFinancingActivities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PaymentsOfLeaseLiabilitiesClassifiedAsFinancingActivities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PaymentsToAcquireOrRedeemEntitysShares": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PercentageOfReasonablyPossibleDecreaseInActuarialAssumption": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PercentageOfReasonablyPossibleIncreaseInActuarialAssumption": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProceedsFromBorrowingsClassifiedAsFinancingActivities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProceedsFromDisposalOrMaturityOfAvailableforsaleFinancialAssets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProceedsFromIssueOfBondsNotesAndDebentures": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProceedsFromIssueOfOrdinaryShares": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProceedsFromIssuingShares": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProceedsFromSalesOfPropertyPlantAndEquipmentClassifiedAsInvestingActivities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProductionSupplies": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProfitLoss": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProfitLossBeforeTax": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProfitLossFromOperatingActivities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PropertyPlantAndEquipment": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PurchaseOfAvailableforsaleFinancialAssets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PurchaseOfPropertyPlantAndEquipmentClassifiedAsInvestingActivities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ReclassificationAdjustmentsOnAvailableforsaleFinancialAssetsBeforeTax": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ReclassificationAdjustmentsOnCashFlowHedgesNetOfTax": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ReclassificationAdjustmentsOnFinancialAssetsMeasuredAtFairValueThroughOtherComprehensiveIncomeBeforeTax": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RecognisedFinanceLeaseAsAssets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RecognisedLiabilitiesDefinedBenefitPlan": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RepaymentsOfBorrowingsClassifiedAsFinancingActivities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ReserveOfSharebasedPayments": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RetainedEarnings": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "Revenue": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RevenueFromContractsWithCustomers": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RevenueFromInterest": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RevenueFromSaleOfCopper": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RevenueFromSaleOfGold": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RevenueFromSaleOfSilver": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ReversalOfImpairmentLoss": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ReversalOfImpairmentLossRecognisedInOtherComprehensiveIncome": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ReversalOfImpairmentLossRecognisedInProfitOrLossPropertyPlantAndEquipment": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RightofuseAssets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "SellingGeneralAndAdministrativeExpense": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ShareIssueRelatedCost": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "SharePremium": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ShorttermEmployeeBenefitsAccruals": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TaxEffectFromChangeInTaxRate": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TaxEffectOfForeignTaxRates": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TaxExpenseIncomeAtApplicableTaxRate": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TemporaryDifferencesAssociatedWithInvestmentsInSubsidiariesBranchesAndAssociatesAndInterestsInJointVentures": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TradeAndOtherCurrentPayables": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TradeAndOtherPayablesToTradeSuppliers": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TransfersIntoLevel3OfFairValueHierarchyAssets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TransfersIntoLevel3OfFairValueHierarchyLiabilities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TransfersOutOfLevel1IntoLevel2OfFairValueHierarchyAssets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TransfersOutOfLevel1IntoLevel2OfFairValueHierarchyLiabilities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TransfersOutOfLevel2IntoLevel1OfFairValueHierarchyAssets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TransfersOutOfLevel2IntoLevel1OfFairValueHierarchyLiabilities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TransfersOutOfLevel3OfFairValueHierarchyAssets": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TransfersOutOfLevel3OfFairValueHierarchyLiabilities": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "UnusedTaxCreditsForWhichNoDeferredTaxAssetRecognised": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "WeightedAverageDurationOfDefinedBenefitObligation": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "Y": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "WeightedAverageShares": {
        "label": {
        "type": "Mixed"
        },
        "description": {
        "type": "Mixed"
        },
        "units": {
        "shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    }
})

export default ifrsFullSchema;
