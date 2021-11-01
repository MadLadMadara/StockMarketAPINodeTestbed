/**
 * @fileoverview Mongoose schema for the 'usgaapSchema' DB collection
 * @exports mongoose.model
 * @author Sam McRuvie
 */
// ----Mongoose package/imports
import mongoose from 'mongoose'

/**
 * @class companyFacts
 * @description Mongoose schema for 'companyFacts' DB collection
 * @type mongoose.Schema
 */
const usgaapSchema = new mongoose.Schema({
    "AccountsPayableTradeCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AccountsReceivableNetCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AccruedIncomeTaxesCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AccumulatedDepreciationDepletionAndAmortizationPropertyPlantAndEquipment": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AccumulatedOtherComprehensiveIncomeLossAvailableForSaleSecuritiesAdjustmentNetOfTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AccumulatedOtherComprehensiveIncomeLossCumulativeChangesInNetGainLossFromCashFlowHedgesEffectNetOfTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AccumulatedOtherComprehensiveIncomeLossDefinedBenefitPensionAndOtherPostretirementPlansNetOfTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AccumulatedOtherComprehensiveIncomeLossForeignCurrencyTranslationAdjustmentNetOfTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AccumulatedOtherComprehensiveIncomeLossNetOfTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AllocatedShareBasedCompensationExpense": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AllowanceForDoubtfulAccountsReceivable": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AllowanceForDoubtfulAccountsReceivableCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AllowanceForDoubtfulAccountsReceivableWriteOffs": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AmortizationOfFinancingCostsAndDiscounts": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AmortizationOfIntangibleAssets": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AntidilutiveSecuritiesExcludedFromComputationOfEarningsPerShareAmount": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AociLossCashFlowHedgeCumulativeGainLossAfterTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "Assets": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AssetsCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AssetsNoncurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AssetsOfDisposalGroupIncludingDiscontinuedOperation": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AssetsOfDisposalGroupIncludingDiscontinuedOperationCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AvailableForSaleSecuritiesAccumulatedGrossUnrealizedGainBeforeTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AvailableForSaleSecuritiesAccumulatedGrossUnrealizedGainLossBeforeTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AvailableForSaleSecuritiesContinuousUnrealizedLossPositionAccumulatedLoss": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AvailableForSaleSecuritiesContinuousUnrealizedLossPositionFairValue": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AvailableForSaleSecuritiesGrossRealizedGains": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AvailableForSaleSecuritiesGrossUnrealizedGains": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AvailableForSaleSecuritiesGrossUnrealizedLoss": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AvailableForSaleSecuritiesGrossUnrealizedLosses1": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "AvailableforsaleSecuritiesGrossUnrealizedGain": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "BuildingsAndImprovementsGross": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "BusinessAcquisitionContingentConsiderationAtFairValueCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "BusinessAcquisitionContingentConsiderationAtFairValueNoncurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "BusinessCombinationContingentConsiderationArrangementsChangeInAmountOfContingentConsiderationAsset1": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "BusinessCombinationContingentConsiderationLiability": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "BusinessCombinationContingentConsiderationLiabilityNoncurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "BusinessCombinationRecognizedIdentifiableAssetsAcquiredAndLiabilitiesAssumedIntangibleAssetsOtherThanGoodwill": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CashAndCashEquivalentsAtCarryingValue": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CashAndCashEquivalentsPeriodIncreaseDecrease": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CashCashEquivalentsAndShortTermInvestments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalents": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalentsPeriodIncreaseDecreaseIncludingExchangeRateEffect": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CommonStockDividendsPerShareDeclared": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CommonStockSharesAuthorized": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CommonStockSharesIssued": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CommonStockValue": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CommonStockValueOutstanding": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ComprehensiveIncomeNetOfTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ComprehensiveIncomeNetOfTaxIncludingPortionAttributableToNoncontrollingInterest": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ConstructionInProgressGross": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ContractWithCustomerLiability": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ContractWithCustomerLiabilityRevenueRecognized": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CostOfGoodsAndServicesSold": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CostOfGoodsSold": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CostsAndExpenses": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CumulativeEffectAdjustmentGrossLosses": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CurrentForeignTaxExpenseBenefit": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "CurrentIncomeTaxExpenseBenefit": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DebtInstrumentFaceAmount": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DebtInstrumentRepurchaseAmount": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DecreaseInUnrecognizedTaxBenefitsIsReasonablyPossible": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredForeignIncomeTaxExpenseBenefit": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredIncomeTaxExpenseBenefit": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredIncomeTaxesAndOtherAssetsNoncurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredIncomeTaxLiabilities": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredTaxAssetsGross": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredTaxAssetsInventory": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredTaxAssetsLiabilitiesNet": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredTaxAssetsNet": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredTaxAssetsNetCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredTaxAssetsStateTaxes": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredTaxAssetsTaxDeferredExpenseCompensationAndBenefits": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredTaxAssetsTaxDeferredExpenseOther": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredTaxAssetsTaxDeferredExpenseReservesAndAccrualsAllowanceForDoubtfulAccounts": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredTaxAssetsValuationAllowance": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredTaxLiabilities": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredTaxLiabilitiesNoncurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredTaxLiabilitiesOther": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredTaxLiabilitiesPropertyPlantAndEquipment": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DeferredTaxLiabilitiesUndistributedForeignEarnings": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DefinedBenefitPlanAccumulatedBenefitObligation": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DefinedBenefitPlanEffectOfOnePercentagePointDecreaseOnAccumulatedPostretirementBenefitObligation": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DefinedBenefitPlanEffectOfOnePercentagePointDecreaseOnAccumulatedPostretirementBenefitObligation1": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DefinedBenefitPlanEffectOfOnePercentagePointDecreaseOnServiceAndInterestCostComponents": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DefinedBenefitPlanEffectOfOnePercentagePointDecreaseOnServiceAndInterestCostComponents1": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DefinedBenefitPlanEffectOfOnePercentagePointIncreaseOnAccumulatedPostretirementBenefitObligation": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DefinedBenefitPlanEffectOfOnePercentagePointIncreaseOnServiceAndInterestCostComponents": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DefinedBenefitPlanFairValueOfPlanAssets": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DefinedBenefitPlanPensionPlansWithAccumulatedBenefitObligationsInExcessOfPlanAssetsAggregateAccumulatedBenefitObligation": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DefinedBenefitPlanPensionPlansWithAccumulatedBenefitObligationsInExcessOfPlanAssetsAggregateFairValueOfPlanAssets": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DefinedBenefitPlanPensionPlansWithAccumulatedBenefitObligationsInExcessOfPlanAssetsAggregateProjectedBenefitObligation": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DefinedBenefitPlanPensionPlanWithProjectedBenefitObligationInExcessOfPlanAssetsPlanAssets": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DefinedBenefitPlanPensionPlanWithProjectedBenefitObligationInExcessOfPlanAssetsProjectedBenefitObligation": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DefinedContributionPlanCostRecognized": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "Depreciation": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DerivativeFairValueOfDerivativeAsset": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DerivativeFairValueOfDerivativeLiability": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DerivativeInstrumentsGainLossReclassifiedFromAccumulatedOCIIntoIncomeEffectivePortionNet": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DerivativeInstrumentsGainRecognizedInIncome": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DiscontinuedOperationGainLossFromDisposalOfDiscontinuedOperationBeforeIncomeTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DiscontinuedOperationGainLossOnDisposalOfDiscontinuedOperationNetOfTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DiscontinuedOperationIncomeLossFromDiscontinuedOperationBeforeIncomeTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DiscontinuedOperationIncomeLossFromDiscontinuedOperationDuringPhaseOutPeriodNetOfTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DiscontinuedOperationTaxEffectOfDiscontinuedOperation": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DiscontinuedOperationTaxEffectOfIncomeLossFromDisposalOfDiscontinuedOperation": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DisposalGroupIncludingDiscontinuedOperationAccountsNotesAndLoansReceivableNet": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DisposalGroupIncludingDiscontinuedOperationAccountsPayable": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DisposalGroupIncludingDiscontinuedOperationAssetsNoncurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DisposalGroupIncludingDiscontinuedOperationGoodwill1": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DisposalGroupIncludingDiscontinuedOperationIntangibleAssets": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DisposalGroupIncludingDiscontinuedOperationIntangibleAssetsNoncurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DisposalGroupIncludingDiscontinuedOperationInventoryCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DisposalGroupIncludingDiscontinuedOperationOtherNoncurrentAssets": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DisposalGroupIncludingDiscontinuedOperationPrepaidAndOtherAssetsCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DisposalGroupIncludingDiscontinuedOperationPropertyPlantAndEquipment": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DisposalGroupIncludingDiscontinuedOperationRevenue": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DividendsPayableCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "DividendsPayableCurrentAndNoncurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EarlyRepaymentOfSubordinatedDebt": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EarningsPerShareBasic": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        },
        "USD/shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EarningsPerShareDiluted": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        },
        "USD/shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EffectiveIncomeTaxRateContinuingOperations": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EffectiveIncomeTaxRateReconciliationAtFederalStatutoryIncomeTaxRate": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EffectiveIncomeTaxRateReconciliationDeductionsDividends": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EffectiveIncomeTaxRateReconciliationForeignIncomeTaxRateDifferential": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EffectiveIncomeTaxRateReconciliationNondeductibleExpenseShareBasedCompensationCost": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EffectiveIncomeTaxRateReconciliationOtherAdjustments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EffectiveIncomeTaxRateReconciliationPriorYearIncomeTaxes": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EffectiveIncomeTaxRateReconciliationStateAndLocalIncomeTaxes": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EffectiveIncomeTaxRateReconciliationTaxCreditsResearch": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EffectOfExchangeRateOnCashAndCashEquivalents": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EffectOfExchangeRateOnCashAndCashEquivalentsContinuingOperations": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EffectOfExchangeRateOnCashCashEquivalentsRestrictedCashAndRestrictedCashEquivalentsIncludingDisposalGroupAndDiscontinuedOperations": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EmployeeRelatedLiabilitiesCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EmployeeServiceShareBasedCompensationNonvestedAwardsTotalCompensationCostNotYetRecognized": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EmployeeServiceShareBasedCompensationNonvestedAwardsTotalCompensationCostNotYetRecognizedPeriodForRecognition": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "Y": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EmployeeServiceShareBasedCompensationTaxBenefitFromCompensationExpense": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EmployeeServiceShareBasedCompensationUnrecognizedCompensationCostsOnNonvestedAwards": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EmployeeServiceShareBasedCompensationUnrecognizedCompensationCostsOnNonvestedAwardsWeightedAveragePeriodOfRecognition": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EquityMethodInvestmentAggregateCost": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EquityMethodInvestmentOtherThanTemporaryImpairment": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EquityMethodInvestmentRealizedGainLossOnDisposal": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EquityMethodInvestments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EquitySecuritiesWithoutReadilyDeterminableFairValueAmount": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "EquitySecuritiesWithoutReadilyDeterminableFairValueUpwardPriceAdjustmentCumulativeAmount": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ExtinguishmentOfDebtAmount": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FairValueEstimateNotPracticableEquityMethodInvestments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FairValueInvestmentsEntitiesThatCalculateNetAssetValuePerShareUnfundedCommittments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FiniteLivedIntangibleAssetsAccumulatedAmortization": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FiniteLivedIntangibleAssetsAmortizationExpenseNextTwelveMonths": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FiniteLivedIntangibleAssetsAmortizationExpenseRemainderOfFiscalYear": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FiniteLivedIntangibleAssetsAmortizationExpenseYearFive": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FiniteLivedIntangibleAssetsAmortizationExpenseYearFour": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FiniteLivedIntangibleAssetsAmortizationExpenseYearThree": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FiniteLivedIntangibleAssetsAmortizationExpenseYearTwo": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FiniteLivedIntangibleAssetsAverageUsefulLife": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        },
        "Y": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FiniteLivedIntangibleAssetsForeignCurrencyTranslationGainLoss": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FiniteLivedIntangibleAssetsGross": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FiniteLivedIntangibleAssetsPurchaseAccountingAdjustments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FiniteLivedIntangibleAssetsUsefulLifeMaximum": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        },
        "Y": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FiniteLivedIntangibleAssetsUsefulLifeMinimum": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        },
        "Y": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FinitelivedIntangibleAssetsAcquired1": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ForeignCurrencyTransactionGainLossBeforeTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ForeignCurrencyTransactionLossBeforeTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FutureAmortizationExpenseYearFive": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FutureAmortizationExpenseYearFour": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FutureAmortizationExpenseYearOne": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FutureAmortizationExpenseYearThree": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "FutureAmortizationExpenseYearTwo": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GainLossOnContractTermination": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GainLossOnSaleOfBusiness": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GainLossOnSaleOfEquityInvestments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GainLossRelatedToLitigationSettlement": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GainsLossesOnExtinguishmentOfDebt": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
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
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GoodwillAcquiredDuringPeriod": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GoodwillForeignCurrencyTranslationGainLoss": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GoodwillImpairmentLoss": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GoodwillPurchaseAccountingAdjustments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GoodwillTranslationAdjustments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GoodwillTranslationAndPurchaseAccountingAdjustments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GoodwillWrittenOffRelatedToSaleOfBusinessUnit": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "GrossProfit": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ImpairmentOfIntangibleAssetsExcludingGoodwill": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ImpairmentOfInvestments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeLossFromContinuingOperationsBeforeIncomeTaxesDomestic": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeLossFromContinuingOperationsBeforeIncomeTaxesForeign": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeLossFromContinuingOperationsBeforeIncomeTaxesMinorityInterestAndIncomeLossFromEquityMethodInvestments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeLossFromContinuingOperationsIncludingPortionAttributableToNoncontrollingInterest": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeLossFromContinuingOperationsPerBasicShare": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        },
        "USD/shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeLossFromContinuingOperationsPerDilutedShare": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        },
        "USD/shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeLossFromDiscontinuedOperationsNetOfTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeLossFromDiscontinuedOperationsNetOfTaxAttributableToReportingEntity": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeLossFromDiscontinuedOperationsNetOfTaxPerBasicShare": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        },
        "USD/shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeLossFromDiscontinuedOperationsNetOfTaxPerDilutedShare": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        },
        "USD/shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeLossFromEquityMethodInvestments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeLossFromEquityMethodInvestmentsNetOfDividendsOrDistributions": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeTaxExpenseBenefit": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeTaxesPaid": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeTaxesPaidNet": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeTaxReconciliationDispositionOfBusiness": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncomeTaxReconciliationPriorYearIncomeTaxes": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncreaseDecreaseInAccountsPayableAndAccruedLiabilities": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncreaseDecreaseInAccountsReceivable": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncreaseDecreaseInAccruedIncomeTaxesPayable": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncreaseDecreaseInInventories": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncreaseDecreaseInOtherAccruedLiabilities": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncreaseDecreaseInOtherOperatingCapitalNet": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncreaseDecreaseInOtherOperatingLiabilities": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncreaseDecreaseInRestrictedCash": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncreaseDecreaseInRestrictedCashForOperatingActivities": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IncrementalCommonSharesAttributableToShareBasedPaymentArrangements": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IndefiniteLivedIntangibleAssetsExcludingGoodwill": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IndefiniteLivedIntangibleAssetsForeignCurrencyTranslationGainLoss": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IndefiniteLivedIntangibleAssetsTranslationAdjustments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "IntangibleAssetsNetExcludingGoodwill": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "InterestExpense": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "InterestPaid": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "InterestPaidNet": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "InventoriesPropertyHeldForSaleCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "InventoryFinishedGoods": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "InventoryFinishedGoodsNetOfReserves": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "InventoryNet": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "InventoryRawMaterials": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "InventoryRawMaterialsNetOfReserves": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "InventoryWorkInProcess": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "InventoryWorkInProcessNetOfReserves": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "InvestmentIncomeInterest": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "InvestmentsFairValueDisclosure": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "Land": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LesseeOperatingLeaseLiabilityPaymentsDue": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LesseeOperatingLeaseLiabilityPaymentsDueAfterYearFive": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LesseeOperatingLeaseLiabilityPaymentsDueNextTwelveMonths": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LesseeOperatingLeaseLiabilityPaymentsDueYearFive": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LesseeOperatingLeaseLiabilityPaymentsDueYearFour": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LesseeOperatingLeaseLiabilityPaymentsDueYearThree": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LesseeOperatingLeaseLiabilityPaymentsDueYearTwo": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LesseeOperatingLeaseLiabilityPaymentsRemainderOfFiscalYear": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LesseeOperatingLeaseLiabilityUndiscountedExcessAmount": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LiabilitiesAndStockholdersEquity": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LiabilitiesCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LiabilitiesOfDisposalGroupIncludingDiscontinuedOperation": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LiabilitiesOfDisposalGroupIncludingDiscontinuedOperationCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LiabilitiesOfDisposalGroupIncludingDiscontinuedOperationNoncurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LineOfCreditFacilityRemainingBorrowingCapacity": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LitigationReserve": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LongTermDebt": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LongTermDebtCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LongTermDebtMaturitiesRepaymentsOfPrincipalAfterYearFive": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LongTermDebtMaturitiesRepaymentsOfPrincipalInNextTwelveMonths": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LongTermDebtMaturitiesRepaymentsOfPrincipalInYearFive": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LongTermDebtMaturitiesRepaymentsOfPrincipalInYearFour": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LongTermDebtMaturitiesRepaymentsOfPrincipalInYearThree": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LongTermDebtMaturitiesRepaymentsOfPrincipalInYearTwo": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LongTermDebtNoncurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LongTermInvestments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LossContingencyAccrualAtCarryingValue": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LossContingencyEstimateOfPossibleLoss": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LossContingencyRangeOfPossibleLossMaximum": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "LossContingencyRangeOfPossibleLossMinimum": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "MachineryAndEquipmentGross": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "MarketableSecuritiesRealizedGainLossOtherThanTemporaryImpairmentsAmount": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "MinorityInterest": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NetCashProvidedByUsedInContinuingOperations": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NetCashProvidedByUsedInDiscontinuedOperations": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NetCashProvidedByUsedInFinancingActivities": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NetCashProvidedByUsedInFinancingActivitiesContinuingOperations": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NetCashProvidedByUsedInInvestingActivities": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NetCashProvidedByUsedInInvestingActivitiesContinuingOperations": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NetCashProvidedByUsedInOperatingActivities": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NetCashProvidedByUsedInOperatingActivitiesContinuingOperations": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NetIncomeLoss": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NetIncomeLossAvailableToCommonStockholdersBasic": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NewAccountingPronouncementOrChangeInAccountingPrincipleEffectOfChangeOnIncomeFromContinuingOperations": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NewAccountingPronouncementOrChangeInAccountingPrincipleEffectOfChangeOnNetIncome": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NewAccountingPronouncementOrChangeInAccountingPrincipleEffectOfChangeOnNetRevenue": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
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
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NotionalAmountOfCashFlowHedgeInstruments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NotionalAmountOfFairValueHedgeInstruments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NotionalAmountOfNetInvestmentHedgeInstruments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NotionalAmountOfOtherDerivativesNotDesignatedAsHedgingInstruments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "NumberOfReportableSegments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "segment": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OperatingIncomeLoss": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OperatingLeaseCost": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OperatingLeaseLiability": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OperatingLeaseLiabilityCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OperatingLeaseLiabilityNoncurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OperatingLeasePayments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OperatingLeaseRightOfUseAsset": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OperatingLeaseWeightedAverageDiscountRatePercent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherAccruedLiabilitiesCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherAccruedLiabilitiesCurrentAndNoncurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherAssetsCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherAssetsNoncurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeAvailableForSaleSecuritiesAdjustmentNetOfTaxPeriodIncreaseDecrease": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeAvailableforsaleSecuritiesAdjustmentNetOfTaxPortionAttributableToParent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeDefinedBenefitPlansAdjustmentNetOfTaxPeriodIncreaseDecrease": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeDefinedBenefitPlansAdjustmentNetOfTaxPortionAttributableToParent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeDefinedBenefitPlansTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeDerivativesQualifyingAsHedgesNetOfTaxPeriodIncreaseDecrease": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeDerivativesQualifyingAsHedgesNetOfTaxPortionAttributableToParent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeDerivativesQualifyingAsHedgesTaxEffectPeriodIncreaseDecrease": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeForeignCurrencyTransactionAndTranslationAdjustmentNetOfTaxPeriodIncreaseDecrease": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeForeignCurrencyTransactionAndTranslationAdjustmentNetOfTaxPortionAttributableToParent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeLossAvailableForSaleSecuritiesAdjustmentNetOfTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeLossBeforeReclassificationsNetOfTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeLossCashFlowHedgeGainLossAfterReclassificationAndTaxParent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeLossCashFlowHedgeGainLossAfterReclassificationTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeLossDerivativesQualifyingAsHedgesNetOfTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeLossDerivativesQualifyingAsHedgesTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeLossForeignCurrencyTransactionAndTranslationAdjustmentNetOfTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeLossNetOfTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeLossNetOfTaxPeriodIncreaseDecrease": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeLossNetOfTaxPortionAttributableToParent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeLossPensionAndOtherPostretirementBenefitPlansAdjustmentNetOfTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeLossPensionAndOtherPostretirementBenefitPlansTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeLossReclassificationAdjustmentOnDerivativesIncludedInNetIncomeNetOfTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeLossReclassificationAdjustmentOnDerivativesIncludedInNetIncomeTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeUnrealizedHoldingGainLossOnSecuritiesArisingDuringPeriodNetOfTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherComprehensiveIncomeUnrealizedHoldingGainLossOnSecuritiesArisingDuringPeriodTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherLiabilitiesNoncurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherNonoperatingIncomeExpense": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherSundryLiabilitiesNoncurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "OtherThanTemporaryImpairmentLossesInvestmentsPortionRecognizedInEarningsNetAvailableforsaleSecurities": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PaymentsForOtherTaxes": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PaymentsForProceedsFromInvestments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PaymentsForProceedsFromOtherInvestingActivities": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PaymentsForRepurchaseOfCommonStock": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PaymentsForRepurchaseOfPreferredStockAndPreferenceStock": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PaymentsOfDebtExtinguishmentCosts": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PaymentsOfDividends": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PaymentsOfDividendsCommonStock": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PaymentsOfFinancingCosts": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PaymentsToAcquireBusinessesNetOfCashAcquired": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PaymentsToAcquireInProcessResearchAndDevelopment": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PaymentsToAcquireMarketableSecurities": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PaymentsToAcquireProductiveAssets": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PaymentsToAcquirePropertyPlantAndEquipment": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PensionAndOtherPostretirementDefinedBenefitPlansLiabilitiesNoncurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PreferredStockParOrStatedValuePerShare": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        },
        "USD/shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PreferredStockSharesAuthorized": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PreferredStockSharesIssued": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PreferredStockValue": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProceedsFromDivestitureOfBusinesses": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProceedsFromDivestitureOfBusinessesAndInterestsInAffiliates": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProceedsFromIssuanceOfLongTermDebt": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProceedsFromPaymentsForOtherFinancingActivities": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProceedsFromRepaymentsOfShortTermDebt": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProceedsFromSaleAndMaturityOfMarketableSecurities": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProceedsFromSaleAndMaturityOfOtherInvestments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProceedsFromSaleOfAvailableForSaleSecuritiesEquity": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProceedsFromSaleOfEquityMethodInvestments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProceedsFromSaleOfLongtermInvestments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProceedsFromSalesOfBusinessAffiliateAndProductiveAssets": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProceedsFromStockOptionsExercised": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
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
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PropertyPlantAndEquipmentAdditions": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PropertyPlantAndEquipmentGross": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "PropertyPlantAndEquipmentNet": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ProvisionForDoubtfulAccounts": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ReclassificationFromAccumulatedOtherComprehensiveIncomeCurrentPeriodBeforeTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ReclassificationFromAccumulatedOtherComprehensiveIncomeCurrentPeriodNetOfTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RepaymentsOfDebt": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RepaymentsOfLongTermDebt": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RepaymentsOfOtherDebt": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RepaymentsOfShortTermDebt": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ResearchAndDevelopmentAssetAcquiredOtherThanThroughBusinessCombinationWrittenOff": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ResearchAndDevelopmentExpense": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ResearchAndDevelopmentExpenseExcludingAcquiredInProcessCost": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ResearchAndDevelopmentInProcess": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RestrictedCashAndCashEquivalentsAtCarryingValue": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RestrictedCashAndInvestmentsCurrent": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RestructuringCharges": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RestructuringReserve": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RestructuringReservePeriodExpense": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RetainedEarningsAccumulatedDeficit": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RevenueFromContractWithCustomerExcludingAssessedTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "RightOfUseAssetObtainedInExchangeForOperatingLeaseLiability": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "SalesRevenueNet": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "SegmentReportingReconcilingItemsRevenue": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
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
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ShareBasedCompensation": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ShareBasedCompensationArrangementByShareBasedPaymentAwardNumberOfSharesAvailableForGrant": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsExercisableNumber": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsExercisableWeightedAverageExercisePrice": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsExercisableWeightedAverageRemainingContractualTerm": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsOutstandingIntrinsicValue": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsOutstandingNumber": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ShareBasedCompensationArrangementByShareBasedPaymentAwardOptionsOutstandingWeightedAverageExercisePrice": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ShortTermBorrowings": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ShortTermDebtWeightedAverageInterestRate": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "pure": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ShortTermInvestments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "SignificantChangeInUnrecognizedTaxBenefitsIsReasonablyPossibleAmountOfUnrecordedBenefit": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "SignificantChangeInUnrecognizedTaxBenefitsIsReasonablyPossibleEstimatedRangeOfChangeLowerBound": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "SignificantChangeInUnrecognizedTaxBenefitsIsReasonablyPossibleEstimatedRangeOfChangeUpperBound": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "StockholdersEquity": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TaxAdjustmentsSettlementsAndUnusualProvisions": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TaxCutsAndJobsActOf2017ChangeInTaxRateIncomeTaxExpenseBenefit": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TaxCutsAndJobsActOf2017IncomeTaxExpenseBenefit": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TranslationAdjustmentForNetInvestmentHedgeIncreaseDecreaseNetOfTax": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TreasuryStockCommonShares": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TreasuryStockCommonValue": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TreasuryStockShares": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "TreasuryStockValue": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "UnamortizedDebtIssuanceExpense": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "UndistributedEarningsOfForeignSubsidiaries": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "UnrealizedGainLossOnInvestments": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "UnrecognizedTaxBenefits": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "UnrecognizedTaxBenefitsDecreasesResultingFromAcquisition": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "UnrecognizedTaxBenefitsDecreasesResultingFromCurrentPeriodTaxPositions": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "UnrecognizedTaxBenefitsDecreasesResultingFromPriorPeriodTaxPositions": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "UnrecognizedTaxBenefitsDecreasesResultingFromSettlementsWithTaxingAuthorities": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "UnrecognizedTaxBenefitsIncreasesResultingFromAcquisition": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "UnrecognizedTaxBenefitsIncreasesResultingFromCurrentPeriodTaxPositions": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "UnrecognizedTaxBenefitsIncreasesResultingFromPriorPeriodTaxPositions": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "UnrecognizedTaxBenefitsPeriodIncreaseDecrease": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "UnrecognizedTaxBenefitsReductionsResultingFromLapseOfApplicableStatuteOfLimitations": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "UnrecognizedTaxBenefitsThatWouldImpactEffectiveTaxRate": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ValuationAllowancesAndReservesBalance": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ValuationAllowancesAndReservesChargedToCostAndExpense": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ValuationAllowancesAndReservesDeductions": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "ValuationAllowancesAndReservesReservesOfBusinessesAcquired": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "USD": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "WeightedAverageNumberOfDilutedSharesOutstanding": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
        },
        "units": {
        "shares": {
            "type": [
            "Mixed"
            ]
        }
        }
    },
    "WeightedAverageNumberOfSharesOutstandingBasic": {
        "label": {
        "type": "String"
        },
        "description": {
        "type": "String"
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

export default usgaapSchema;
