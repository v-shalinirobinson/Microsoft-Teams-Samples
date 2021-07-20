﻿// <copyright file="AdaptiveCardAction.cs" company="Microsoft">
// Copyright (c) Microsoft. All rights reserved.
// </copyright>

namespace TabWithAdpativeCardFlow.Models
{
    using Microsoft.Bot.Schema;
    using Newtonsoft.Json;

    /// <summary>
    /// Adaptive card action model class.
    /// </summary>
    public class AdaptiveCardAction
    {
        /// <summary>
        /// Gets or sets Ms Teams card action type.
        /// </summary>
        [JsonProperty("msteams")]
        public CardAction MsteamsCardAction { get; set; }
    }
}
